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



    let width = window.innerWidth,
        size_grow = 0;
    width <= 576 ? size_grow = 12 : size_grow = 50;

    const effect_title = $('.scroll__effect-text');
    const default_size = parseInt(window.getComputedStyle(effect_title).fontSize);
    let default_scroll = 0;
    window.addEventListener('scroll', () => {
        let size = parseInt(window.getComputedStyle(effect_title).fontSize);

        if(default_scroll < scrollY && 
            size < (default_size + size_grow) && 
            effect_title.getBoundingClientRect().top < size_grow){

            effect_title.style.fontSize = `${size + 2}px`;

        }else if(default_scroll > scrollY && 
                size > default_size && 
                effect_title.getBoundingClientRect().top > -200){

            effect_title.style.fontSize = `${size - 2}px`;

        } 
        default_scroll = scrollY;

    });
});