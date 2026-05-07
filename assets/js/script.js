/* Beauty with EVE — Shared JS */

/* ── i18n: Language switcher ── */
(function () {
  const SUPPORTED = ['en', 'zh', 'ms'];
  const STORAGE_KEY = 'bwe.lang';
  const HTML_LANG = { en: 'en-MY', zh: 'zh', ms: 'ms' };

  function detectLang() {
    const url = new URLSearchParams(window.location.search).get('lang');
    if (url && SUPPORTED.includes(url)) return url;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (e) { /* localStorage may be unavailable */ }
    const browser = (navigator.language || '').toLowerCase();
    if (browser.startsWith('zh')) return 'zh';
    if (browser.startsWith('ms')) return 'ms';
    return 'en';
  }

  function applyLang(lang) {
    const dict = (window.BWE_TRANSLATIONS && window.BWE_TRANSLATIONS[lang]) || {};
    document.documentElement.setAttribute('lang', HTML_LANG[lang] || lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
    });

    document.querySelectorAll('.nav__lang-btn').forEach(btn => {
      const isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'en';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    applyLang(lang);
  }

  // Public API for inline scripts (e.g. contact form presets)
  window.BWE_I18N = {
    getLang: detectLang,
    setLang: setLang
  };

  // Wire up button clicks
  document.addEventListener('click', e => {
    const btn = e.target.closest('.nav__lang-btn');
    if (!btn) return;
    setLang(btn.getAttribute('data-lang'));
  });

  // Apply on initial load
  applyLang(detectLang());
})();

// Nav scroll state
const nav = document.getElementById('nav');
if (nav) {
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// Mobile nav toggle
const hamburger = document.querySelector('.nav__hamburger');
const navMobile = document.querySelector('.nav__mobile');
if (hamburger && navMobile) {
  function closeNav() {
    nav.classList.remove('nav--open');
    hamburger.setAttribute('aria-expanded', 'false');
    navMobile.classList.remove('open');
    navMobile.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburger.focus();
  }

  hamburger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('nav--open');
    hamburger.setAttribute('aria-expanded', isOpen);
    navMobile.classList.toggle('open', isOpen);
    navMobile.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) navMobile.querySelector('a').focus();
  });

  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('nav--open')) closeNav();
  });
}

// Fade-in on scroll
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

/**
 * Smooth Accordion for <details> elements
 * Only active on mobile (<= 768px).
 * On desktop, sections remain expanded.
 */
class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector('summary');
    this.content = el.querySelector('summary + *');

    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;

    // Initial state check
    this.checkMode();

    // Listen for resize to handle orientation/window changes
    window.addEventListener('resize', () => this.checkMode());

    this.summary.addEventListener('click', (e) => this.onClick(e));
  }

  checkMode() {
    if (window.innerWidth > 768) {
      this.el.open = true;
      this.el.style.height = '';
      if (this.animation) this.animation.cancel();
    }
  }

  onClick(e) {
    // If desktop, don't allow toggling
    if (window.innerWidth > 768) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    this.el.style.overflow = 'hidden';
    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.getVerticalPadding(this.el)}px`;

    if (this.animation) this.animation.cancel();

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });

    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => this.isClosing = false;
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.getContentHeight() + this.getVerticalPadding(this.el)}px`;

    if (this.animation) this.animation.cancel();

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
    });

    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => this.isExpanding = false;
  }

  getVerticalPadding(el) {
    const style = window.getComputedStyle(el);
    return parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  }

  getContentHeight() {
    let height = 0;
    const children = Array.from(this.el.children);
    children.forEach(child => {
      if (child !== this.summary) {
        const rect = child.getBoundingClientRect();
        const style = window.getComputedStyle(child);
        const margins = (parseFloat(style.marginTop) || 0) + (parseFloat(style.marginBottom) || 0);
        height += rect.height + margins;
      }
    });
    return height;
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = '';
    this.el.style.overflow = '';
  }
}

document.querySelectorAll('details').forEach((el) => {
  new Accordion(el);
});
