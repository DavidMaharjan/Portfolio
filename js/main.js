// ================================================================
// David Maharjan · portfolio
// Small, dependency-free behaviour for the page.
// ================================================================

(function () {
  'use strict';

  var root = document.documentElement;

  // ---------- Theme (light / dark), remembered between visits ----------
  // The first theme is set by the inline script in <head>, so the page never flashes.
  var themeBtn = document.querySelector('[data-testid="theme-toggle"]');

  function labelTheme() {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    themeBtn.setAttribute('aria-label', 'Switch to ' + next + ' mode');
    themeBtn.title = 'Switch to ' + next + ' mode';
  }

  if (themeBtn) {
    labelTheme();
    themeBtn.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: still works for this visit */ }
      labelTheme();
    });
  }

  // ---------- Mobile menu ----------
  var nav = document.getElementById('site-nav');
  var menuBtn = document.querySelector('.menu-btn');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
  }

  if (nav && menuBtn) {
    menuBtn.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setMenu(false);
        menuBtn.focus();
      }
    });
  }

  // ---------- Highlight the nav link of the section on screen ----------
  var links = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];
  if ('IntersectionObserver' in window && links.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var section = document.querySelector(a.getAttribute('href'));
      if (section) io.observe(section);
    });
  }

  // ---------- Email panel: show the address with Copy / Gmail / mail app ----------
  // A plain mailto: link does nothing for people without a mail app, so offer options.
  document.querySelectorAll('[data-testid="socials"]').forEach(function (block) {
    var toggle = block.querySelector('[data-email-toggle]');
    var panel = block.querySelector('[data-testid="email-panel"]');
    var copyBtn = block.querySelector('[data-testid="copy-email"]');
    var closeBtn = panel && panel.querySelector('.close');
    var address = panel && panel.querySelector('.address');
    if (!toggle || !panel) return;

    function show(open) {
      panel.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
    }

    toggle.addEventListener('click', function () { show(panel.hidden); });
    closeBtn.addEventListener('click', function () { show(false); toggle.focus(); });

    copyBtn.addEventListener('click', function () {
      var email = address.textContent.trim();
      function done() {
        copyBtn.textContent = 'Copied';
        setTimeout(function () { copyBtn.textContent = 'Copy'; }, 2000);
      }
      function selectText() {
        var range = document.createRange();
        range.selectNodeContents(address);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, selectText);
      } else {
        selectText();
      }
    });
  });

  // ---------- Toolbox tabs ----------
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs [role="tab"]'));

  function selectTab(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab); });
    tab.addEventListener('keydown', function (e) {
      var step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!step) return;
      var next = tabs[(i + step + tabs.length) % tabs.length];
      selectTab(next);
      next.focus();
    });
  });

  // ---------- Photo: show initials if the image is missing ----------
  var photo = document.querySelector('[data-testid="photo"]');
  function useFallback() {
    var fallback = document.createElement('div');
    fallback.className = 'photo-fallback';
    fallback.dataset.testid = 'photo-fallback';
    fallback.textContent = 'DM';
    photo.replaceWith(fallback);
  }
  if (photo) {
    if (photo.complete && photo.naturalWidth === 0) useFallback();
    photo.addEventListener('error', useFallback);
  }

  // ---------- Footer year ----------
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
