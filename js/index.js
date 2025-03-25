// Carrossel de jogos em destaque
let currentSlide = 0;
const slides = document.querySelectorAll('.game-slide');

function showSlide(n) {
    slides.forEach(slide => slide.style.display = 'none');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

// Botões de navegação
document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));

// Inicialização
showSlide(0);