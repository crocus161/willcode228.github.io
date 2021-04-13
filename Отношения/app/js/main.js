window.addEventListener('load', () => {
    const $ = elem => document.querySelector(elem);

    const nav_close = $('.nav__list-close'),
        nav_open = $('.nav__open'),
        nav_list = $('.nav__list');

    nav_open.addEventListener('click', () => {
        nav_list.classList.add('nav__list-active');
    });
    nav_close.addEventListener('click', () => {
        nav_list.classList.remove('nav__list-active');
    });
});