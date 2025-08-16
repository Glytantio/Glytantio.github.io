// script.js — robust carousel logic

(function () {
  const root = document.getElementById('projectsCarousel');
  if (!root) return;

  const track = root.querySelector('.track');
  const slides = Array.from(root.querySelectorAll('.slide'));
  const prevBtn = root.querySelector('.prev');
  const nextBtn = root.querySelector('.next');
  const dots = Array.from(root.querySelectorAll('.dot'));

  let index = 0;
  let timer;

  function update() {
    // Move the track
    track.style.transform = `translateX(-${index * 100}%)`;

    // Update dots
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function go(n) {
    index = (n + slides.length) % slides.length;
    update();
    restartAuto();
  }

  function next() { go(index + 1); }
  function prev() { go(index - 1); }

  function startAuto() {
    timer = setInterval(next, 4000); // auto-advance every 4s
  }

  function stopAuto() {
    clearInterval(timer);
  }

  function restartAuto() {
    stopAuto();
    startAuto();
  }

  // Events
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  dots.forEach((dot, i) => dot.addEventListener('click', () => go(i)));

  // Pause on hover (desktop)
  root.addEventListener('mouseenter', stopAuto);
  root.addEventListener('mouseleave', startAuto);

  // Init
  update();
  startAuto();
})();
