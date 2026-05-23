// Sticky nav background on scroll
(function() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => {
    if (window.scrollY > 12) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Mobile nav toggle — toggles a class on body to show nav-links as overlay
(function() {
  const btn = document.getElementById('navToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
})();

// Scroll reveal — add `.reveal` to elements and they fade in as they enter viewport
(function() {
  const targets = document.querySelectorAll('.card, .case, .step, .stat, .about-text > *, .achievements');
  targets.forEach(t => t.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) {
    targets.forEach(t => t.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(t => io.observe(t));
})();

// Smooth anchor scrolling already handled by CSS scroll-behavior; nothing else to do.
