let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex].classList.add("active");
}
