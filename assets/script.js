// Acme Financial Services – basic interactions
(function () {
  const header = document.querySelector('.site-header');
  const nav = document.getElementById('primaryNav');
  const toggle = document.getElementById('navToggle');
  const year = document.getElementById('year');

  // Set current year in footer
  if (year) year.textContent = String(new Date().getFullYear());

  // Sticky header state on scroll
  const onScroll = () => {
    if (!header) return;
    const scrolled = window.scrollY > 8;
    header.classList.toggle('scrolled', scrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  if (toggle && nav) {
    const closeNav = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    };
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      nav.classList.toggle('open', !expanded);
    });
    nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeNav));
  }

  // Simple form behavior
  const form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const msgId = 'signup-success-msg';
      const existing = document.getElementById(msgId);
      if (existing) existing.remove();
      const msg = document.createElement('p');
      msg.id = msgId;
      msg.className = 'fineprint';
      msg.textContent = 'Thanks! We\'ll be in touch shortly.';
      form.appendChild(msg);
      if (btn) {
        btn.disabled = true;
        btn.textContent = 'Requested';
      }
    });
  }
})();

