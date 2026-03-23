/* Beauty with EVE — Shared JS */

// ── Footer component ──
const footerEl = document.getElementById('site-footer');
if (footerEl) {
  footerEl.className = 'footer-drape';
  footerEl.innerHTML = `
    <a href="home.html" class="footer-drape__logo"><span class="logo-prefix">Beauty with </span><span class="logo-eve">EVE</span></a>
    <nav class="footer-drape__links" aria-label="Footer navigation">
      <a href="#" aria-label="Follow Beauty with EVE on Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
        Instagram
      </a>
    </nav>
    <div class="footer-drape__tagline">Personal Colour Analysis by Evelynn Koo — certified colour analyst &amp; HRD Corp accredited trainer based in Kuala Lumpur, Malaysia.</div>
    <div class="footer-drape__copy">© 2026 Beauty with EVE · Colour Analysis & Image Consulting · Kuala Lumpur, Malaysia</div>
  `;
}

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
