/* Beauty with EVE — Shared JS */

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
