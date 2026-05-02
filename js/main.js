'use strict';

/* ── Navbar scroll ───────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Mobile menu ─────────────────────────────────── */
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ── Parallax about section ──────────────────────── */
const parallaxEl = document.querySelector('[data-parallax]');
if (parallaxEl) {
  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    const section = parallaxEl.closest('#about');
    if (!section) return;
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      parallaxEl.style.transform = `translateY(${offset * 0.25}px)`;
    }
  }, { passive: true });
}

/* ── Particle canvas (floating fire sparks) ─────── */
(function initParticles() {
  const canvas = document.createElement('canvas');
  const ctx    = canvas.getContext('2d');
  const hero   = document.getElementById('hero');
  const container = document.getElementById('particles');
  container.appendChild(canvas);

  function resize() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const particles = [];
  const COUNT = 55;

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      r:    Math.random() * 1.8 + 0.4,
      vx:   (Math.random() - 0.5) * 0.35,
      vy:   -(Math.random() * 0.6 + 0.15),
      life: Math.random(),
      maxL: 0.6 + Math.random() * 0.4,
      side: Math.random() < 0.5 ? 'fire' : 'space',
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x   += p.vx;
      p.y   += p.vy;
      p.life += 0.004;

      if (p.life > p.maxL || p.y < 0) {
        p.x    = Math.random() * canvas.width;
        p.y    = canvas.height + 5;
        p.life = 0;
      }

      const alpha = Math.sin(p.life / p.maxL * Math.PI) * 0.7;
      if (p.side === 'fire') {
        ctx.fillStyle = `rgba(255, ${Math.floor(140 + Math.random()*60)}, 30, ${alpha})`;
      } else {
        ctx.fillStyle = `rgba(120, 180, 255, ${alpha * 0.5})`;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── Scroll-triggered fade-ins ───────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── Gallery lightbox ────────────────────────────── */
const items    = Array.from(document.querySelectorAll('.gallery-item'));
const lightbox = document.getElementById('lightbox');
const lbImg    = document.getElementById('lb-img');
const lbCtr    = document.getElementById('lb-counter');
let   current  = 0;

function openLightbox(i) {
  current = i;
  lbImg.src = items[i].src;
  lbCtr.textContent = `${i + 1} / ${items.length}`;
  lightbox.classList.remove('lightbox-hidden');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.add('lightbox-hidden');
  document.body.style.overflow = '';
}
function prev() { openLightbox((current - 1 + items.length) % items.length); }
function next() { openLightbox((current + 1) % items.length); }

items.forEach((img, i) => img.addEventListener('click', () => openLightbox(i)));
document.getElementById('lb-close').addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', prev);
document.getElementById('lb-next').addEventListener('click', next);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (lightbox.classList.contains('lightbox-hidden')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  prev();
  if (e.key === 'ArrowRight') next();
});
