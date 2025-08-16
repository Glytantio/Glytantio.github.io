let index = 0;
const carousel = document.querySelector('.carousel');
const totalProjects = document.querySelectorAll('.project').length;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalProjects;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalProjects) % totalProjects;
    carousel.style.transform = `translateX(-${index * 100}%)`;
});
