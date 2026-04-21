function initTicks() {
  const ticks = document.getElementById('ticks');
  const hero = document.getElementById('heroVisual');
  if (!ticks || !hero) return;
  const count = 60;
  ticks.innerHTML = '';
  const radius = hero.clientWidth / 2 - 14;
  for (let i = 0; i < count; i++) {
    const t = document.createElement('div');
    t.className = 'tick';
    const angle = (i / count) * 360;
    t.style.transform = `translate(-50%,0) rotate(${angle}deg) translateY(-50%) translateY(${-radius}px)`;
    if (i % 5 === 0) {
      t.style.height = '14px';
      t.style.opacity = '0.45';
    }
    ticks.appendChild(t);
  }
}

function initNavScroll() {
  const nav = document.getElementById('nav');
  const progress = document.getElementById('progress');
  if (!nav || !progress) return;
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 10);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initReveal() {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  els.forEach((el) => io.observe(el));
}

function initRefrigerantTabs() {
  const tabs = document.querySelectorAll<HTMLButtonElement>('.ref-tab');
  const panels = document.querySelectorAll<HTMLElement>('.ref-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const id = tab.dataset.ref;
      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', active ? 'true' : 'false');
      });
      panels.forEach((p) => p.classList.toggle('active', p.dataset.panel === id));
    });
  });
}

function initSmoothAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id.length <= 1) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function boot() {
  initTicks();
  initNavScroll();
  initReveal();
  initRefrigerantTabs();
  initSmoothAnchors();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

window.addEventListener('resize', () => {
  initTicks();
});
