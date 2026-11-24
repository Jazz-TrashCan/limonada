// Menú hamburguesa
const menuToggle = document.querySelector('#menu-toggle');
const headerNav = document.querySelector('#header__nav');

if (menuToggle && headerNav) {

    menuToggle.addEventListener('click', () => {

        const isOpen = headerNav.classList.toggle('active');

        menuToggle.classList.toggle('active', isOpen);

        menuToggle.setAttribute('aria-expanded', isOpen);

        menuToggle.setAttribute(
            'aria-label',
            isOpen ? 'Cerrar menú' : 'Abrir menú'
        );

    });

}

import PhotoSwipeLightbox from 'https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe-lightbox.esm.min.js';

const gallery = document.querySelector('#gallery__grid');

// Obtener dimensiones automáticamente
const images = gallery.querySelectorAll('a');

images.forEach((link) => {

    const img = new Image();

    img.src = link.href;

    img.onload = () => {
        link.dataset.pswpWidth = img.naturalWidth;
        link.dataset.pswpHeight = img.naturalHeight;
    };

});

// Configurar PhotoSwipe
const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery__grid',
    children: 'a',

    pswpModule: () =>
        import('https://cdnjs.cloudflare.com/ajax/libs/photoswipe/5.4.4/photoswipe.esm.min.js'),

    bgOpacity: 0.9,
    showHideAnimationType: 'zoom',
    loop: true
});

lightbox.init();



// Seleccionar los carruseles
const commissionSliders = document.querySelectorAll('.comn__swiper');

// Inicializar cada carrusel
commissionSliders.forEach((slider) => {

    const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: '3',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        767: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 5
        }
    }

    });


});