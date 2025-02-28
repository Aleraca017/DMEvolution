
document.addEventListener("DOMContentLoaded", function () {
    const bannerSlider = document.getElementById("bannerSlider");
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const totalSlides = slides.length;

    // Clonando as primeiras slides para criar o efeito infinito
    const firstSlide = slides[0].cloneNode(true);
    const secondSlide = slides[1].cloneNode(true);
    const thirdSlide = slides[2].cloneNode(true);

    // Colocando as clones no final
    bannerSlider.appendChild(firstSlide);
    bannerSlider.appendChild(secondSlide);
    bannerSlider.appendChild(thirdSlide);

    // Função para controlar a animação do carrossel
    let currentIndex = 0;
    let interval;

    function moveCarousel() {
        currentIndex++;
        bannerSlider.style.transform = `translateX(-${100 * currentIndex}vw)`;

        // Atualizar indicadores
        updateIndicators(currentIndex);

        // Após a transição, se chegou ao final, volta para o início sem animação
        if (currentIndex === totalSlides) {
            setTimeout(() => {
                bannerSlider.style.transition = 'none'; // Retira a transição
                bannerSlider.style.transform = `translateX(0)`;
            }, 1000); // Aguarda 1 segundo para transição
            setTimeout(() => {
                bannerSlider.style.transition = 'transform 1s ease-in-out'; // Restaura a transição
            }, 1100);
            currentIndex = 0;
        }
    }

    // Atualizar indicadores
    function updateIndicators(index) {
        indicators.forEach((indicator, i) => {
            indicator.classList.remove('active');
            if (i === index % totalSlides) {
                indicator.classList.add('active');
            }
        });
    }

    // Clique nos indicadores
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            currentIndex = parseInt(indicator.getAttribute('data-index'));
            bannerSlider.style.transform = `translateX(-${100 * currentIndex}vw)`;
            updateIndicators(currentIndex);
        });
    });

    // Iniciar o intervalo de movimento do carrossel
    function startCarousel() {
        interval = setInterval(moveCarousel, 3000); // Muda a cada 3 segundos
    }

    // Pausar o carrossel quando o mouse entra
    banner.addEventListener('mouseenter', function () {
        clearInterval(interval);
    });

    // Retornar o carrossel quando o mouse sai
    banner.addEventListener('mouseleave', function () {
        startCarousel();
    });

    // Iniciar o carrossel assim que a página carregar
    startCarousel();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
    window.scrollTo({
        top: target.offsetTop - document.querySelector('.fixed-header').offsetHeight,
        behavior: 'smooth'
    });
}
});
});

document.addEventListener("DOMContentLoaded", function () {
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideMenu = document.getElementById("sideMenu");
const sideMenuClose = document.getElementById("sideMenuClose");

// Quando o botão do hambúrguer é clicado
hamburgerMenu.addEventListener("click", function () {
sideMenu.classList.add("open"); // Abre a aba lateral
hamburgerMenu.classList.add("open"); // Anima o botão de hambúrguer
});

// Quando o botão de fechar a aba lateral é clicado
sideMenuClose.addEventListener("click", function () {
sideMenu.classList.remove("open"); // Fecha a aba lateral
hamburgerMenu.classList.remove("open"); // Reseta a animação do hambúrguer
});
});


document.addEventListener("DOMContentLoaded", function () {
const whatsappButton = document.querySelector(".whatsapp-button");

setInterval(() => {
whatsappButton.classList.add("animated");

setTimeout(() => {
    whatsappButton.classList.remove("animated");
}, 2000); // Remove os efeitos após 2s
}, 7000); // Ativa a cada 7s
});

function toggleMenu() {
const sideMenu = document.getElementById('sideMenu');
sideMenu.classList.toggle('show'); /* Alterna a visibilidade do menu lateral */
}
