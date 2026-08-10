const reveals = document.querySelectorAll('.reveal');
const menuButton = document.querySelector('#menuToggle');
const sidebar = document.querySelector('#sidebar');
const portrait = document.querySelector('.portrait');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  },
  // threshold em fracao nao serve aqui: o painel de projetos passa de 3000px e
  // nunca chega a 20% visivel em telas baixas, ficando preso em opacity 0.
  // threshold 0 dispara com qualquer pixel visivel; o rootMargin so atrasa um
  // pouco para a animacao ainda ser percebida.
  { threshold: 0, rootMargin: '0px 0px -80px 0px' }
);

reveals.forEach((item, index) => {
  item.style.transitionDelay = `${index * 60}ms`;
  observer.observe(item);
});

if (menuButton && sidebar) {
  menuButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  sidebar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => sidebar.classList.remove('open'));
  });
}

if (portrait) {
  portrait.addEventListener('error', () => {
    portrait.closest('.portrait-shell')?.classList.add('no-image');
  });
}

/* ---------- Galeria de telas ---------- */

document.querySelectorAll('[data-gallery]').forEach((gallery) => {
  const slides = Array.from(gallery.querySelectorAll('.gallery-slide'));
  if (slides.length < 2) return;

  const caption = gallery.querySelector('[data-gallery-caption]');
  const counter = gallery.querySelector('[data-gallery-counter]');
  const dotsBox = gallery.querySelector('[data-gallery-dots]');
  let index = slides.findIndex((slide) => slide.classList.contains('is-active'));
  if (index < 0) index = 0;

  const dots = slides.map((slide, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'gallery-dot';
    dot.setAttribute('aria-label', `Ir para a imagem ${i + 1} de ${slides.length}`);
    dot.addEventListener('click', () => show(i));
    dotsBox?.appendChild(dot);
    return dot;
  });

  function show(next) {
    // modulo com length somado antes: em JS, -1 % 6 da -1, entao voltar da
    // primeira imagem cairia fora do array em vez de ir para a ultima.
    index = (next + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle('is-active', i === index);
      // as inativas saem da ordem de leitura para o leitor de tela nao
      // anunciar as seis capturas de uma vez
      slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-current', i === index ? 'true' : 'false');
    });

    if (caption) caption.textContent = slides[index].dataset.caption ?? '';
    if (counter) counter.textContent = `${index + 1} / ${slides.length}`;
  }

  gallery.querySelector('[data-gallery-prev]')?.addEventListener('click', () => show(index - 1));
  gallery.querySelector('[data-gallery-next]')?.addEventListener('click', () => show(index + 1));

  gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(index - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + 1);
    }
  });

  // Arrastar no celular, onde as setas sao pequenas: so conta como swipe o
  // gesto mais horizontal que vertical, para nao roubar a rolagem da pagina.
  let startX = 0;
  let startY = 0;

  gallery.addEventListener(
    'touchstart',
    (event) => {
      startX = event.changedTouches[0].clientX;
      startY = event.changedTouches[0].clientY;
    },
    { passive: true }
  );

  gallery.addEventListener(
    'touchend',
    (event) => {
      const dx = event.changedTouches[0].clientX - startX;
      const dy = event.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) show(dx < 0 ? index + 1 : index - 1);
    },
    { passive: true }
  );

  show(index);
});
