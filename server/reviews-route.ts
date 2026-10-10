import { env } from "cloudflare:workers";
import { getChatGPTUser } from "../../chatgpt-auth";

const runtime = () => env as unknown as { DB: D1Database; REVE_OWNER_EMAIL?: string };
const reply = (data: unknown, status = 200) => Response.json(data, {
  status, headers: { "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff" },
});
type Identity = Awaited<ReturnType<typeof getChatGPTUser>>;
type ReviewRow = {
  id: string; name: string; rating: number; text: string;
  created_at: string; updated_at: string; hidden: number; deleted: number;
};
const fields = "id, name, rating, text, created_at, updated_at, hidden, deleted";
function isOwner(user: Identity) {
  return !!user && !!runtime().REVE_OWNER_EMAIL &&
    user.email.toLowerCase() === runtime().REVE_OWNER_EMAIL!.toLowerCase();
}
function bounded(value: string | null, fallback: number, min: number, max: number) {
  if (!value || !/^\d+$/.test(value)) return fallback;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? Math.min(max, Math.max(min, parsed)) : fallback;
}
function present(row: ReviewRow, privateStatus = false) {
  return {
    id: row.id, name: row.name, rating: row.rating, text: row.text,
    createdAt: row.created_at, updatedAt: row.updated_at,
    ...(privateStatus ? { hidden: row.hidden === 1, deleted: row.deleted === 1 } : {}),
  };
}
async function payload(request: Request, user: Identity, admin = false) {
  const db = runtime().DB;
  if (!db) throw new Error("Reviews database unavailable");
  const url = new URL(request.url);
  const limit = bounded(url.searchParams.get("limit"), 6, 1, 50);
  const requestedPage = bounded(url.searchParams.get("page"), 1, 1, 1000000);
  const scope = admin ? "" : " WHERE hidden = 0 AND deleted = 0";
  const counts = await db.batch([
    db.prepare("SELECT COUNT(*) AS count, AVG(rating) AS average FROM reviews WHERE hidden = 0 AND deleted = 0"),
    db.prepare("SELECT COUNT(*) AS total FROM reviews" + scope),
  ]);
  const stats = counts[0].results[0] as { count: number; average: number | null };
  const total = Number((counts[1].results[0] as { total: number }).total);
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const page = Math.min(requestedPage, totalPages);
  const statements = [db.prepare("SELECT " + fields + " FROM reviews" + scope +
    " ORDER BY created_at DESC, id DESC LIMIT ? OFFSET ?").bind(limit, (page - 1) * limit)];
  if (user) statements.push(db.prepare("SELECT " + fields + " FROM reviews WHERE user_id = ? LIMIT 1").bind(user.userId));
  const rows = await db.batch(statements);
  const mine = user ? rows[1].results[0] as ReviewRow | undefined : undefined;
  return {
    reviews: (rows[0].results as ReviewRow[]).map(row => present(row, admin)),
    summary: { count: Number(stats.count), average: stats.average === null ? null : Math.round(Number(stats.average) * 10) / 10 },
    authenticated: !!user, mine: mine ? present(mine, true) : null,
    isOwner: isOwner(user), page, totalPages, total,
  };
}
export async function GET(request: Request) {
  try {
    const user = await getChatGPTUser();
    const admin = new URL(request.url).searchParams.get("admin") === "1";
    if (admin && !isOwner(user)) return reply({ error: "Alleen de eigenaar mag reviews beheren." }, 403);
    return reply(await payload(request, user, admin));
  } catch { return reply({ error: "Reviews konden niet worden geladen. Probeer opnieuw." }, 503); }
}
async function readBody(request: Request) {
  const maxBytes = 16000;
  if (Number(request.headers.get("content-length")) > maxBytes) return null;
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let length = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    length += value.byteLength;
    if (length > maxBytes) { await reader.cancel(); return null; }
    chunks.push(value);
  }
  const bytes = new Uint8Array(length);
  let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return new TextDecoder().decode(bytes);
}
function onlyKeys(value: Record<string, unknown>, allowed: string[]) {
  return Object.keys(value).every(key => allowed.includes(key));
}
export async function POST(request: Request) {
  try {
    if (request.headers.get("Origin") !== new URL(request.url).origin ||
      request.headers.get("Sec-Fetch-Site") === "cross-site") return reply({ error: "Ongeldige aanvraag." }, 403);
    const user = await getChatGPTUser();
    if (!user) return reply({ error: "Log eerst in om een review achter te laten." }, 401);
    if (request.headers.get("Content-Type")?.split(";")[0].trim().toLowerCase() !== "application/json")
      return reply({ error: "Gebruik een geldige reviewaanvraag." }, 415);
    const raw = await readBody(request);
    if (raw === null) return reply({ error: "Aanvraag te groot." }, 413);
    let body: Record<string, unknown>;
    try { body = JSON.parse(raw); } catch { return reply({ error: "Ongeldige aanvraag." }, 400); }
    if (!body || Array.isArray(body) || typeof body !== "object") return reply({ error: "Ongeldige aanvraag." }, 400);
    const db = runtime().DB;
    if (!db) throw new Error("Reviews database unavailable");
    const now = new Date().toISOString();
    if (body.action === "save") {
      if (!onlyKeys(body, ["action", "name", "rating", "text", "publicConsent"]) ||
        typeof body.name !== "string" || typeof body.text !== "string" ||
        !Number.isInteger(body.rating) || Number(body.rating) < 1 || Number(body.rating) > 5 ||
        body.publicConsent !== true) return reply({ error: "Vul je naam, 1–5 sterren en je review in en geef toestemming voor publicatie." }, 400);
      const name = body.name.trim();
      const text = body.text.trim();
      if (name.length < 2 || name.length > 40 || /[\u0000-\u001f\u007f]/.test(name) ||
        text.length < 10 || text.length > 1500 || /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(text))
        return reply({ error: "Gebruik een naam van 2–40 tekens en een review van 10–1500 tekens." }, 400);
      await db.prepare("INSERT INTO reviews (id, user_id, name, rating, text, created_at, updated_at, hidden, deleted) VALUES (?, ?, ?, ?, ?, ?, ?, 0, 0) ON CONFLICT(user_id) DO UPDATE SET name = excluded.name, rating = excluded.rating, text = excluded.text, updated_at = excluded.updated_at, deleted = 0")
        .bind(crypto.randomUUID(), user.userId, name, body.rating, text, now, now).run();
      return reply(await payload(request, user));
    }
    if (body.action === "remove") {
      if (!onlyKeys(body, ["action"])) return reply({ error: "Ongeldige aanvraag." }, 400);
      await db.prepare("UPDATE reviews SET deleted = 1, updated_at = ? WHERE user_id = ?").bind(now, user.userId).run();
      return reply(await payload(request, user));
    }
    if (body.action === "moderate") {
      if (!isOwner(user)) return reply({ error: "Alleen de eigenaar mag reviews beheren." }, 403);
      if (!onlyKeys(body, ["action", "id", "hidden"]) || typeof body.id !== "string" ||
        !/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(body.id) ||
        typeof body.hidden !== "boolean") return reply({ error: "Kies een geldige review." }, 400);
      const result = await db.prepare("UPDATE reviews SET hidden = ?, updated_at = ? WHERE id = ?")
        .bind(body.hidden ? 1 : 0, now, body.id).run();
      if (!result.meta.changes) return reply({ error: "Review niet gevonden." }, 404);
      return reply(await payload(request, user, true));
    }
    return reply({ error: "Ongeldige reviewactie." }, 400);
  } catch { return reply({ error: "Je review kon niet worden opgeslagen. Probeer opnieuw." }, 503); }
}
