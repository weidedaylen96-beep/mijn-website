(() => {
  'use strict';
  const root = document.querySelector('[data-reviews-mode]');
  if (!root) return;
  const fullPage = root.dataset.reviewsMode === 'page';
  const limit = fullPage ? 6 : 3;
  const list = root.querySelector('[data-review-list]');
  const summary = root.querySelector('[data-review-summary]');
  const loadStatus = root.querySelector('[data-review-load-status]');
  const retry = root.querySelector('[data-review-retry]');
  const pagination = root.querySelector('[data-review-pagination]');
  const previous = root.querySelector('[data-review-previous]');
  const next = root.querySelector('[data-review-next]');
  const pageLabel = root.querySelector('[data-review-page-label]');
  const form = root.querySelector('#review-form');
  const login = root.querySelector('[data-review-login]');
  const authStatus = root.querySelector('[data-review-auth-status]');
  const ownStatus = root.querySelector('[data-review-own-status]');
  const nameInput = root.querySelector('#review-name');
  const ratingInput = root.querySelector('#review-rating');
  const textInput = root.querySelector('#review-text');
  const consentInput = root.querySelector('#review-consent');
  const characterCount = root.querySelector('[data-review-character-count]');
  const submit = root.querySelector('#review-submit');
  const remove = root.querySelector('#review-remove');
  const saveStatus = root.querySelector('#review-save-status');
  let page = 1;
  let totalPages = 1;
  let authenticated = false;
  let loaded = false;
  let busy = false;
  let mine = null;
  let requestSequence = 0;

  const create = (tag, className, value) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (value !== undefined) element.textContent = String(value);
    return element;
  };
  const stars = (rating) => {
    const element = create('p', 'review-stars', '★'.repeat(rating) + '☆'.repeat(5 - rating));
    element.setAttribute('role', 'img');
    element.setAttribute('aria-label', `${rating} van 5 sterren`);
    return element;
  };
  const validReview = (review) => review && typeof review.id === 'string' && typeof review.name === 'string' && typeof review.text === 'string' && Number.isInteger(review.rating) && review.rating >= 1 && review.rating <= 5 && typeof review.createdAt === 'string' && Number.isFinite(new Date(review.createdAt).getTime());
  const dateText = (value) => new Date(value).toLocaleDateString('nl-NL', {day: 'numeric', month: 'long', year: 'numeric'});
  function renderSummary(data) {
    summary.replaceChildren();
    const count = data && data.count;
    if (!Number.isInteger(count) || count < 0) {
      summary.hidden = true;
      return;
    }
    summary.hidden = false;
    if (count > 0 && Number.isFinite(data.average) && data.average >= 1 && data.average <= 5) {
      const average = create('p', 'review-average', data.average.toLocaleString('nl-NL', {minimumFractionDigits: 1, maximumFractionDigits: 1}));
      average.append(create('small', '', '/ 5'));
      average.setAttribute('aria-label', `Gemiddeld ${data.average.toLocaleString('nl-NL', {maximumFractionDigits: 1})} van 5 sterren`);
      summary.append(average, stars(Math.round(data.average)));
    }
    summary.append(create('p', 'review-count', count === 0 ? 'Nog geen openbare reviews' : `${count} openbare ${count === 1 ? 'review' : 'reviews'} · ervaringen met REVE`));
  }
  function renderReviews(reviews, count) {
    list.replaceChildren();
    const visible = reviews.filter(validReview);
    if (!visible.length) {
      const empty = create('div', 'review-empty');
      empty.append(create('h3', '', count === 0 ? 'Het eerste woord is aan jou.' : 'Op deze pagina staan geen reviews.'), create('p', '', count === 0 ? 'Er zijn nog geen openbare ervaringen gedeeld. Heb je REVE ontdekt? Vertel wat je ervan vindt.' : 'Bekijk de vorige pagina of deel je eigen ervaring met REVE.'));
      const link = create('a', '', count === 0 ? 'Schrijf de eerste review ↗' : 'Deel jouw ervaring ↗');
      link.href = fullPage ? '#review-schrijven' : '/reviews.html#review-schrijven';
      empty.append(link);
      list.append(empty);
      return;
    }
    for (const review of visible) {
      const article = create('article', 'review-card');
      const top = create('div', 'review-card-top');
      const avatar = create('span', 'review-avatar', Array.from(review.name.trim())[0]?.toLocaleUpperCase('nl-NL') || 'R');
      avatar.setAttribute('aria-hidden', 'true');
      const identity = create('div', 'review-card-identity');
      const time = create('time', '', dateText(review.createdAt));
      time.dateTime = review.createdAt;
      identity.append(create('h3', '', review.name), time);
      top.append(avatar, identity);
      article.append(top, stars(review.rating), create('p', 'review-card-text', review.text));
      list.append(article);
    }
  }
  function countCharacters() {
    if (characterCount) characterCount.textContent = `${textInput.value.length} / 1500 tekens`;
  }
  function renderAccount(data, fillForm) {
    if (!fullPage) return;
    authenticated = data.authenticated === true;
    mine = data.mine || null;
    form.hidden = !authenticated;
    login.hidden = authenticated;
    authStatus.textContent = authenticated ? 'Je bent ingelogd. Je kunt je eigen ervaring delen.' : 'Log in met ChatGPT om je eigen review te plaatsen. Reviews lezen kan zonder account.';
    ownStatus.hidden = !mine;
    if (mine) ownStatus.textContent = mine.deleted ? 'Je eerdere review is uit de openbare reviews verwijderd. Je kunt hieronder een nieuwe ervaring delen.' : mine.hidden ? 'Je review is momenteel niet openbaar. Je kunt je tekst hieronder bijwerken of je review verwijderen.' : 'Je hebt al een review gedeeld. Hieronder kun je die aanpassen of verwijderen.';
    submit.textContent = mine && !mine.deleted ? 'Review bijwerken ↗' : 'Review plaatsen ↗';
    remove.hidden = !mine || mine.deleted === true;
    if (fillForm) {
      nameInput.value = mine && !mine.deleted ? mine.name : '';
      ratingInput.value = mine && !mine.deleted ? String(mine.rating) : '';
      textInput.value = mine && !mine.deleted ? mine.text : '';
      consentInput.checked = false;
      countCharacters();
    }
  }
  function renderPagination() {
    if (!pagination) return;
    pagination.hidden = totalPages <= 1;
    previous.disabled = busy || page <= 1;
    next.disabled = busy || page >= totalPages;
    pageLabel.textContent = `Pagina ${page} van ${totalPages}`;
  }
  function renderPayload(data, fillForm = false) {
    if (!data || !Array.isArray(data.reviews) || !data.summary || !data.reviews.every(validReview) || !Number.isInteger(data.summary.count) || data.summary.count < 0) throw new Error('invalid_response');
    page = Number.isInteger(data.page) && data.page > 0 ? data.page : 1;
    totalPages = Number.isInteger(data.totalPages) && data.totalPages > 0 ? data.totalPages : 1;
    renderSummary(data.summary);
    renderReviews(data.reviews, data.summary.count);
    renderAccount(data, fillForm);
    renderPagination();
    loaded = true;
    retry.hidden = true;
    loadStatus.textContent = '';
  }
  function setBusy(value) {
    busy = value;
    if (retry) retry.disabled = value;
    if (form) {
      for (const element of form.querySelectorAll('input,select,textarea,button')) element.disabled = value;
    }
    renderPagination();
  }
  async function request(url, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 12000);
    try {
      const response = await fetch(url, {credentials: 'same-origin', cache: 'no-store', ...options, signal: controller.signal});
      if (!response.ok) {
        const error = new Error('request_failed');
        error.status = response.status;
        throw error;
      }
      return await response.json();
    } finally {
      clearTimeout(timeout);
    }
  }
  async function load(targetPage = 1, fillForm = false) {
    const sequence = ++requestSequence;
    setBusy(true);
    loadStatus.textContent = 'Ervaringen ophalen…';
    retry.hidden = true;
    try {
      const data = await request(`/api/reviews?limit=${limit}&page=${targetPage}`);
      if (sequence !== requestSequence) return;
      renderPayload(data, fillForm);
    } catch {
      if (sequence !== requestSequence) return;
      loadStatus.textContent = loaded ? 'De reviews konden niet worden vernieuwd. Hieronder staat de laatst opgehaalde informatie.' : 'De reviews kunnen nu niet worden geladen. Probeer het nog eens.';
      retry.hidden = false;
      if (!loaded && authStatus) authStatus.textContent = 'Inloggen en je review plaatsen worden beschikbaar zodra de verbinding is hersteld.';
    } finally {
      if (sequence === requestSequence) setBusy(false);
    }
  }
  function setSaveStatus(text, state = '') {
    saveStatus.textContent = text;
    saveStatus.dataset.state = state;
  }
  function saveError(error) {
    if (error.status === 401) {
      authenticated = false;
      form.hidden = true;
      login.hidden = false;
      authStatus.textContent = 'Je sessie is verlopen. Log opnieuw in om je review te delen.';
      return;
    }
    setSaveStatus(error.status === 400 ? 'Controleer je naam, sterren, tekst en toestemming om openbaar te delen.' : error.status === 403 ? 'Deze wijziging kon niet worden toegestaan. Vernieuw de pagina en probeer het opnieuw.' : error.status === 429 ? 'Je hebt kort geleden meerdere wijzigingen gedaan. Probeer het over een moment opnieuw.' : 'Je review kon niet worden opgeslagen. Je tekst staat nog in het formulier. Probeer het opnieuw.', 'error');
  }
  if (retry) retry.addEventListener('click', () => load(page, !loaded));
  if (previous) previous.addEventListener('click', () => { if (!busy && page > 1) load(page - 1); });
  if (next) next.addEventListener('click', () => { if (!busy && page < totalPages) load(page + 1); });
  if (form) {
    textInput.addEventListener('input', countCharacters);
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (busy || !authenticated) return;
      if (!form.reportValidity()) return;
      const name = nameInput.value.trim();
      const text = textInput.value.trim();
      const rating = Number(ratingInput.value);
      if (name.length < 2 || name.length > 40 || text.length < 10 || text.length > 1500 || !Number.isInteger(rating) || rating < 1 || rating > 5 || !consentInput.checked) {
        setSaveStatus('Kies een naam van 2–40 tekens, 1–5 sterren en een tekst van 10–1500 tekens. Geef ook toestemming om je review openbaar te delen.', 'error');
        return;
      }
      setBusy(true);
      setSaveStatus('Je review wordt opgeslagen…');
      try {
        const data = await request('/api/reviews', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({action: 'save', name, rating, text, publicConsent: true})});
        renderPayload(data, true);
        setSaveStatus(data.mine?.hidden ? 'Je review is opgeslagen. Hij is momenteel niet openbaar.' : 'Bedankt! Je review is opgeslagen en staat bij de openbare ervaringen.', 'success');
      } catch (error) {
        saveError(error);
      } finally {
        setBusy(false);
      }
    });
    remove.addEventListener('click', async () => {
      if (busy || !authenticated || !mine || mine.deleted) return;
      if (!window.confirm('Wil je jouw review uit de openbare reviews verwijderen?')) return;
      setBusy(true);
      setSaveStatus('Je review wordt verwijderd…');
      try {
        const data = await request('/api/reviews', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({action: 'remove'})});
        renderPayload(data, true);
        setSaveStatus('Je review is verwijderd. Je kunt later opnieuw een ervaring delen.', 'success');
      } catch (error) {
        saveError(error);
      } finally {
        setBusy(false);
      }
    });
  }
  load(1, true);
})();
