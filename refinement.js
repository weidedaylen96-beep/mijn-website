(() => {
  'use strict';
  const header = document.querySelector('.refined-header');
  if (!header) return;
  const menu = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  document.body.classList.add('menu-ready');
  header.classList.add('menu-ready');
  menu.hidden = false;
  function setMenu(open, returnFocus = false) {
    header.classList.toggle('menu-open', open);
    menu.setAttribute('aria-expanded', String(open));
    menu.querySelector('span:last-child').textContent = open ? 'Sluiten' : 'Menu';
    if (returnFocus) menu.focus();
  }
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && header.classList.contains('menu-open')) setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (header.classList.contains('menu-open') && !header.contains(event.target)) setMenu(false);
  });
  header.addEventListener('focusout', () => {
    queueMicrotask(() => { if (!header.contains(document.activeElement)) setMenu(false); });
  });
  const desktop = window.matchMedia('(min-width: 1101px)');
  desktop.addEventListener('change', event => { if (event.matches) setMenu(false); });

  function updateSelection() {
    const capsule = document.getElementById('capsule');
    const audience = document.getElementById('audience');
    const search = document.getElementById('search');
    const active = document.querySelector('[data-filter].active');
    document.querySelectorAll('[data-capsule]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.capsule === capsule.value));
    });
    const selected = [];
    if (active && active.dataset.filter !== 'all') selected.push(active.textContent.trim());
    if (capsule.value !== 'all') selected.push(capsule.selectedOptions[0].textContent);
    if (audience.value !== 'all') selected.push(audience.selectedOptions[0].textContent);
    if (search.value.trim()) selected.push('“' + search.value.trim() + '”');
    const summary = document.getElementById('selection-summary');
    summary.hidden = !selected.length;
    summary.querySelector('p').textContent = selected.join(' / ');
  }
  document.getElementById('reset-filters').addEventListener('click', () => {
    ['capsule', 'audience'].forEach(id => { document.getElementById(id).value = 'all'; });
    document.getElementById('search').value = '';
    document.getElementById('sort').value = 'featured';
    document.querySelector('[data-filter="all"]').click();
    document.getElementById('search').focus({preventScroll: true});
  });
  new MutationObserver(updateSelection).observe(document.getElementById('products'), {childList: true});
  updateSelection();

  const productDialog = document.getElementById('product-dialog');
  const productContent = document.getElementById('product-content');
  function arrangeProduct() {
    const art = productContent.querySelector(':scope > .product-art');
    if (!art) return;
    const visual = document.createElement('div');
    visual.className = 'product-detail-visual';
    const info = document.createElement('div');
    info.className = 'product-detail-info';
    Array.from(productContent.childNodes).filter(node => node !== art).forEach(node => info.append(node));
    visual.append(art);
    const feedback = document.createElement('p');
    feedback.id = 'detail-feedback';
    feedback.className = 'dialog-status';
    feedback.setAttribute('role', 'status');
    feedback.setAttribute('aria-live', 'polite');
    info.append(feedback);
    productContent.replaceChildren(visual, info);
    const image = art.querySelector('img');
    if (image) image.loading = 'eager';
  }
  new MutationObserver(arrangeProduct).observe(productContent, {childList: true});
  arrangeProduct();
  productDialog.addEventListener('click', event => {
    if (event.target !== productDialog) return;
    const r = productDialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) productDialog.close();
  });
  const dialogs = Array.from(document.querySelectorAll('dialog'));
  const reflectDialogs = () => document.body.classList.toggle('dialog-open', dialogs.some(dialog => dialog.open));
  const dialogObserver = new MutationObserver(reflectDialogs);
  dialogs.forEach(dialog => dialogObserver.observe(dialog, {attributes: true, attributeFilter: ['open']}));
  reflectDialogs();

  const lookCards = Array.from(document.querySelectorAll('#looks-grid .look-card'));
  const more = document.getElementById('show-all-looks');
  function showLooks(all) {
    lookCards.forEach((card, index) => { card.hidden = !all && index >= 6; });
    more.setAttribute('aria-expanded', String(all));
    more.innerHTML = (all ? 'Toon minder setjes' : 'Bekijk alle ' + lookCards.length + ' setjes') + ' <span aria-hidden="true">' + (all ? '−' : '↗') + '</span>';
    document.getElementById('looks-count').textContent = all ? 'Alle ' + lookCards.length + ' REVE-setjes.' : 'Een selectie van 6 setjes uit de collectie.';
  }
  if (lookCards.length > 6) {
    more.parentElement.hidden = false;
    showLooks(false);
    more.addEventListener('click', () => {
      const expanding = more.getAttribute('aria-expanded') !== 'true';
      showLooks(expanding);
      if (expanding) lookCards[6].querySelector('[data-look]').focus({preventScroll: true});
      else document.getElementById('looks-title').scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start'});
    });
  }
  function exposeAnchor(hash) {
    if (!hash || !/^#[a-z0-9-]+$/i.test(hash)) return;
    const target = document.getElementById(hash.slice(1));
    if (target?.closest('.look-card[hidden]')) showLooks(true);
  }
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => exposeAnchor(link.getAttribute('href'))));
  window.addEventListener('hashchange', () => { exposeAnchor(window.location.hash); updateNavigation(); });
  function updateNavigation() {
    nav.querySelectorAll('a[href^="#"]').forEach(link => {
      const selected = link.getAttribute('href') === window.location.hash;
      link.classList.toggle('nav-active', selected);
      if (selected) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
    });
  }
  exposeAnchor(window.location.hash);
  updateNavigation();
})();
