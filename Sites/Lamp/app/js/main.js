window.addEventListener('load', () => {
    const $ = el => document.querySelector(el);

    const open = $('.nav__btn'),
        close = $('.nav__menu-close'),
        menu = $('.nav__menu'),
        overlay = $('.overlay');

    open.addEventListener('click', () => {
        menu.classList.add('active');
        overlay.style.opacity = 1;
    });

    close.addEventListener('click', () => {
        menu.classList.remove('active');
        overlay.style.opacity = 0;
    });


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });
});
