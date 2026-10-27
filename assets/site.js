/* Theme switch for the profile pages: light / dark, remembered per browser.
   The button shows the theme it switches to (moon on light, sun on dark). */
(function () {
  var root = document.documentElement, K = 'sub-theme', mq = window.matchMedia('(prefers-color-scheme: dark)');
  var inner = document.querySelector('nav .nav-inner');
  if (!inner) return;
  var tools = inner.querySelector('.nav-tools');
  if (!tools) { tools = document.createElement('span'); tools.className = 'nav-tools'; inner.appendChild(tools); }
  var b = document.createElement('button');
  b.type = 'button'; b.className = 'theme-btn';
  b.innerHTML = '<svg class="i-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7z"/></svg>' +
    '<svg class="i-sun" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
  tools.insertBefore(b, tools.firstChild);
  function eff() { return root.getAttribute('data-theme') || (mq.matches ? 'dark' : 'light'); }
  function label() { var l = 'Switch to ' + (eff() === 'dark' ? 'light' : 'dark') + ' theme'; b.setAttribute('aria-label', l); b.title = l; }
  label(); if (mq.addEventListener) mq.addEventListener('change', label);
  b.addEventListener('click', function () {
    var n = eff() === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(K, n); } catch (e) {}
    root.setAttribute('data-theme', n); label();
  });
})();
