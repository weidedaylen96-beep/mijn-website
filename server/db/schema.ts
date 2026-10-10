import { sql } from "drizzle-orm";
import { check, index, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const reviews = sqliteTable("reviews", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  name: text("name").notNull(),
  rating: integer("rating").notNull(),
  text: text("text").notNull(),
  createdAt: text("created_at").notNull(),
  updatedAt: text("updated_at").notNull(),
  hidden: integer("hidden", { mode: "boolean" }).notNull().default(false),
  deleted: integer("deleted", { mode: "boolean" }).notNull().default(false),
}, (table) => [
  uniqueIndex("reviews_user_id_unique").on(table.userId),
  index("reviews_public_created_idx").on(table.hidden, table.deleted, table.createdAt),
  check("reviews_rating_range", sql`${table.rating} between 1 and 5`),
  check("reviews_hidden_boolean", sql`${table.hidden} in (0, 1)`),
  check("reviews_deleted_boolean", sql`${table.deleted} in (0, 1)`),
]);
