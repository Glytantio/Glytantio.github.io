let currentIndex = 0;

function moveSlide(direction) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}
