(() => {
  const panel = document.getElementById('review-admin');
  if (!panel) return;
  const list = document.getElementById('review-admin-list');
  const status = document.getElementById('review-admin-status');
  const more = document.getElementById('review-admin-more');
  const reload = document.getElementById('review-admin-reload');
  let page = 1;
  let busy = false;
  async function request(url, options) {
    const response = await fetch(url, {cache: 'no-store', ...options});
    const data = await response.json();
    if (!response.ok) throw Object.assign(new Error(data.error || 'Reviews laden is mislukt.'), {status: response.status});
    return data;
  }
  function row(review) {
    const article = document.createElement('article');
    article.className = 'admin-review-row';
    const heading = document.createElement('h3');
    heading.textContent = review.name + ' · ' + review.rating + ' van 5 sterren';
    const state = document.createElement('p');
    state.className = 'admin-review-state';
    state.textContent = review.deleted ? 'Door de schrijver verwijderd' : review.hidden ? 'Verborgen door beheer' : 'Zichtbaar in de winkel';
    const text = document.createElement('p');
    text.className = 'admin-review-text';
    text.textContent = review.text;
    const date = document.createElement('p');
    date.className = 'concept-note';
    const parsed = new Date(review.updatedAt);
    date.textContent = Number.isNaN(parsed.getTime()) ? '' : 'Laatst bijgewerkt op ' + new Intl.DateTimeFormat('nl-NL', {dateStyle:'medium'}).format(parsed);
    article.append(heading, state, text, date);
    if (!review.deleted) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'button';
      button.textContent = review.hidden ? 'Opnieuw tonen' : 'Spam verbergen';
      const message = document.createElement('p');
      message.className = 'concept-note';
      message.setAttribute('role', 'status');
      button.addEventListener('click', async () => {
        button.disabled = true;
        message.textContent = 'Wijziging opslaan…';
        try {
          await request('/api/reviews', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({action:'moderate',id:review.id,hidden:!review.hidden})});
          await load(1, true);
        } catch (error) {message.textContent = error.message;}
        finally {button.disabled = false;}
      });
      article.append(button, message);
    }
    return article;
  }
  async function load(nextPage = 1, replace = true) {
    if (busy) return;
    busy = true;
    more.disabled = true;
    reload.disabled = true;
    status.textContent = 'Reviews laden…';
    try {
      const data = await request('/api/reviews?admin=1&limit=50&page=' + nextPage);
      panel.hidden = false;
      if (replace) list.replaceChildren();
      const reviews = Array.isArray(data.reviews) ? data.reviews : [];
      if (!reviews.length && replace) {
        const empty = document.createElement('p');
        empty.textContent = 'Er zijn nog geen reviews. Reviews verschijnen hier zodra iemand er één plaatst.';
        list.append(empty);
      }
      reviews.forEach(review => list.append(row(review)));
      page = data.page || nextPage;
      more.hidden = page >= (data.totalPages || 1);
      status.textContent = '';
    } catch (error) {
      if (error.status === 401 || error.status === 403) {panel.hidden = true;}
      else {panel.hidden = false;status.textContent = error.message + ' Gebruik Vernieuwen om opnieuw te proberen.';}
    } finally {busy = false;more.disabled = false;reload.disabled = false;}
  }
  more.addEventListener('click', () => load(page + 1, false));
  reload.addEventListener('click', () => load(1, true));
  // Check the same owner boundary as the product workspace before requesting moderation data.
  request('/api/catalog?me=1').then(me => {if (me.isOwner) return load();}).catch(() => {});
})();
