/* ============================================================
   RAW / HONEST — behaviour
   Every component has already rendered itself by the time this
   file parses, so all the wiring happens on DOMContentLoaded.
   ============================================================ */
(() => {
  "use strict";

  const appConfig = {
    themeKey: 'rh-theme',
    themes: ['t-bone', 't-acid', 't-dark'],
    themeColors: { 't-bone': '#F4F1EA', 't-acid': '#D8FF3E', 't-dark': '#111111' },
    toastDuration: 1800,
    glitchInterval: 7000,
    glitchFrameMs: 55,
    glitchGlyphs: '#%&@§Ø*!?!',
    observerThreshold: 0.15,
    observerMargin: '0px 0px -80px 0px'
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- toast (defined first — everything else calls it) ---------- */
  const toastEl = document.getElementById('toast');
  let toastTimer = null;

  function toast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), appConfig.toastDuration);
  }

  /* ---------- theme flipping ---------- */
  function initTheme() {
    const buttons = Array.from(document.querySelectorAll('.themes button'));
    const meta = document.querySelector('meta[name="theme-color"]');

    // The pre-paint script in <head> already applied the saved class; this
    // only syncs the chips to whatever it decided.
    const markActive = (theme) => {
      buttons.forEach(b => {
        const on = b.dataset.theme === theme;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      if (meta) meta.setAttribute('content', appConfig.themeColors[theme]);
    };

    const current = appConfig.themes.find(t => document.documentElement.classList.contains(t));
    markActive(current || 't-bone');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const theme = button.dataset.theme;
        document.documentElement.classList.remove(...appConfig.themes);
        if (theme !== 't-bone') {
          document.documentElement.classList.add(theme);
        }
        markActive(theme);
        try {
          localStorage.setItem(appConfig.themeKey, theme);
        } catch (e) {
          /* private browsing — the flip still works, it just won't persist */
        }
        toast('World flipped ↯ ' + theme.replace('t-', ''));
      });
    });
  }

  /* ---------- glitch scramble on the hero word ---------- */
  function initGlitch() {
    const word = document.getElementById('glitchWord');
    if (!word || reduceMotion) return;

    const original = word.dataset.txt || word.textContent;
    const glyphs = appConfig.glitchGlyphs;
    const totalFrames = original.length + 5;
    let scrambling = false;

    setInterval(() => {
      if (scrambling || document.hidden) return;
      scrambling = true;

      let frame = 0;
      const run = setInterval(() => {
        frame++;
        word.textContent = original
          .split('')
          .map(char => (Math.random() < frame / totalFrames
            ? char
            : glyphs[Math.floor(Math.random() * glyphs.length)]))
          .join('');

        if (frame >= totalFrames) {
          clearInterval(run);
          word.textContent = original;
          scrambling = false;
        }
      }, appConfig.glitchFrameMs);
    }, appConfig.glitchInterval);
  }

  /* ---------- stamp button copies the email ---------- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    // file:// and plain http have no async clipboard — fall back.
    return new Promise((resolve, reject) => {
      const scratch = document.createElement('textarea');
      scratch.value = text;
      scratch.setAttribute('readonly', '');
      scratch.style.position = 'fixed';
      scratch.style.opacity = '0';
      document.body.appendChild(scratch);
      scratch.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(scratch);
      ok ? resolve() : reject(new Error('copy failed'));
    });
  }

  function initStamp() {
    const stamp = document.getElementById('stampBtn');
    if (!stamp) return;

    stamp.addEventListener('click', () => {
      stamp.style.transform = 'translate(4px, 4px)';
      setTimeout(() => { stamp.style.transform = ''; }, 700);

      copyText(stamp.dataset.email)
        .then(() => toast('↯ Email copied'))
        .catch(() => toast(stamp.dataset.email));
    });
  }

  /* ---------- coursework rows ---------- */
  function initIndexRows() {
    document.querySelectorAll('#courseList li').forEach(row => {
      row.addEventListener('click', () => {
        toast(row.dataset.category + ' · ' + row.dataset.course);
      });
    });
  }

  /* ---------- colophon cycles its alignment ---------- */
  function initColophon() {
    const colophon = document.getElementById('colophon');
    const text = document.getElementById('alText');
    if (!colophon || !text) return;

    const modes = ['left', 'center', 'right', 'justify'];
    let index = 0;

    const cycle = () => {
      index = (index + 1) % modes.length;
      colophon.style.textAlign = modes[index];
      text.style.letterSpacing = index === 1 ? '0.32em' : '';
      toast('Alignment: ' + modes[index]);
    };

    colophon.addEventListener('click', cycle);
    colophon.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        cycle();
      }
    });
  }

  /* ---------- one observer for every revealed block ---------- */
  function initReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (reduceMotion) {
      targets.forEach(el => el.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: appConfig.observerThreshold,
      rootMargin: appConfig.observerMargin
    });

    targets.forEach(el => observer.observe(el));
  }

  /* ---------- anchor scrolling, offset by the real header height ---------- */
  function initSmoothScroll() {
    const header = document.getElementById('navbar');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const id = this.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;

        e.preventDefault();
        const offset = header ? header.offsetHeight : 0;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - offset,
          behavior: reduceMotion ? 'auto' : 'smooth'
        });
      });
    });
  }

  /* ---------- mobile menu ---------- */
  function initHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    const close = () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    };

    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = navMenu.classList.toggle('active');
      hamburger.classList.toggle('active', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.bar')) close();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  /* ---------- invert the nav link for the section in view ---------- */
  function initScrollSpy() {
    const links = Array.from(document.querySelectorAll('.nav-menu a[href^="#"]'));
    const sections = links
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => {
          link.classList.toggle(
            'is-active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initGlitch();
    initStamp();
    initIndexRows();
    initColophon();
    initReveal();
    initSmoothScroll();
    initHamburgerMenu();
    initScrollSpy();
  });
})();
