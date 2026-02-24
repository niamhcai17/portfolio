// ========================================
// Scroll Reveal — Intersection Observer
// ========================================
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px',
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ========================================
// Sticky Nav — Background on Scroll
// ========================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
}, { passive: true });

// ========================================
// About Modal
// ========================================
const aboutModal = document.getElementById('about');
const aboutClose = document.querySelector('.about__close');

function openAbout() {
  aboutModal.classList.add('about--open');
  aboutModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('menu-open');
}

function closeAbout() {
  aboutModal.classList.remove('about--open');
  aboutModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('menu-open');
}

aboutClose.addEventListener('click', closeAbout);

// Close on backdrop click (outside .about__inner)
aboutModal.addEventListener('click', (e) => {
  if (e.target === aboutModal) closeAbout();
});

// ========================================
// Smooth Scroll for Nav Links
// ========================================
document.querySelectorAll('.nav__links a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
    if (link.getAttribute('href') === '#about') {
      openAbout();
      return;
    }
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ========================================
// Mobile Menu Toggle
// ========================================
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.getElementById('navLinks');

function openMenu() {
  navToggle.classList.add('nav__toggle--active');
  navLinks.classList.add('nav__links--open');
  navToggle.setAttribute('aria-expanded', 'true');
  navToggle.setAttribute('aria-label', 'Close menu');
  document.body.classList.add('menu-open');
}

function closeMenu() {
  navToggle.classList.remove('nav__toggle--active');
  navLinks.classList.remove('nav__links--open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('menu-open');
}

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.contains('nav__toggle--active');
  isOpen ? closeMenu() : openMenu();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMenu();
    closeAbout();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});

// ========================================
// Screenshot Cascade — Click to Front
// ========================================
document.querySelectorAll('.screenshot-cascade').forEach((cascade) => {
  const screenshots = cascade.querySelectorAll('.screenshot');

  screenshots.forEach((img) => {
    img.addEventListener('click', () => {
      // Find which image currently has --1 (front)
      const front = cascade.querySelector('.screenshot--1');
      if (img === front) return;

      // Get the clicked image's current class (--2 or --3)
      const clickedClass = img.classList.contains('screenshot--2') ? 'screenshot--2' : 'screenshot--3';

      // Swap classes between front and clicked
      front.classList.remove('screenshot--1');
      front.classList.add(clickedClass);
      img.classList.remove(clickedClass);
      img.classList.add('screenshot--1');
    });
  });
});

// Reset screenshots to original order when card leaves viewport
const cascadeCards = document.querySelectorAll('.project-card');

const resetObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        const cascade = entry.target.querySelector('.screenshot-cascade');
        if (!cascade) return;
        const imgs = cascade.querySelectorAll('.screenshot');
        imgs.forEach((img, i) => {
          img.classList.remove('screenshot--1', 'screenshot--2', 'screenshot--3');
          img.classList.add(`screenshot--${i + 1}`);
        });
      }
    });
  },
  { threshold: 0 }
);

cascadeCards.forEach((card) => resetObserver.observe(card));
