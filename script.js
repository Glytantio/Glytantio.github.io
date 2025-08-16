let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalItems = document.querySelectorAll('.carousel-item').length;

    if (index >= totalItems) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalItems - 1;
    } else {
        currentIndex = index;
    }

    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.carousel-btn.left').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.carousel-btn.right').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});
