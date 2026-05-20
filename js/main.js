'use strict';

/* ── Navbar scroll ───────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
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

/* ── Language switcher (visual) ──────────────────── */
document.querySelectorAll('.lang-btn, .footer-langs a').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    const group = btn.closest('.lang-switcher, .footer-langs');
    if (group) {
      group.querySelectorAll('.lang-btn, a').forEach(b => b.classList.remove('active'));
    }
    btn.classList.add('active');
  });
});

/* ── Welding sparks particle system ─────────────── */
(function initSparks() {
  const canvas = document.getElementById('sparks');
  if (!canvas) return;
  const ctx  = canvas.getContext('2d');
  const hero = document.getElementById('hero');

  function resize() {
    canvas.width  = hero.offsetWidth;
    canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  function makeSpark(fromBottom) {
    const x = fromBottom
      ? (Math.random() * 0.5 + 0.1) * canvas.width  // sparks rise from bottom-left area (welding zone)
      : Math.random() * canvas.width;
    return {
      x,
      y:    fromBottom ? canvas.height + 5 : Math.random() * canvas.height,
      r:    Math.random() * 1.6 + 0.3,
      vx:   (Math.random() - 0.45) * 1.1,
      vy:   -(Math.random() * 1.5 + 0.4),
      life: fromBottom ? 0 : Math.random(),
      maxL: 0.45 + Math.random() * 0.55,
      hot:  Math.random() < 0.65,
    };
  }

  const COUNT = 65;
  const sparks = Array.from({ length: COUNT }, () => makeSpark(false));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < sparks.length; i++) {
      const p = sparks[i];
      p.x    += p.vx;
      p.y    += p.vy;
      p.life += 0.006;

      if (p.life > p.maxL || p.y < -10) {
        sparks[i] = makeSpark(true);
        continue;
      }

      const alpha = Math.sin((p.life / p.maxL) * Math.PI) * 0.72;
      if (p.hot) {
        ctx.fillStyle = `rgba(255, ${100 + Math.random() * 80 | 0}, 15, ${alpha})`;
      } else {
        ctx.fillStyle = `rgba(255, ${200 + Math.random() * 55 | 0}, 80, ${alpha * 0.85})`;
      }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
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

/* ── Contact form (client-side, no backend) ──────── */
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.style.background = '#1e7a3a';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });
}
