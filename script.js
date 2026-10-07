(() => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.desktop-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  const lb = document.querySelector('.lightbox');
  if (lb) {
    const lbImg = lb.querySelector('img');
    const close = () => { lb.classList.remove('open'); lbImg.removeAttribute('src'); document.body.style.overflow=''; };
    document.querySelectorAll('.question-card').forEach(card => {
      card.addEventListener('click', () => {
        const full = card.dataset.full;
        if (!full) return;
        lbImg.src = full;
        lbImg.alt = card.querySelector('img')?.alt || 'Tarjeta ampliada';
        lb.classList.add('open');
        document.body.style.overflow='hidden';
      });
    });
    lb.querySelector('.lightbox-close').addEventListener('click', close);
    lb.addEventListener('click', e => { if (e.target === lb) close(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  }

  const filters = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.question-card[data-category]');
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.dataset.filter;
    cards.forEach(card => card.classList.toggle('hidden', category !== 'all' && card.dataset.category !== category));
  }));
})();
