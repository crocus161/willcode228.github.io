window.addEventListener('load', () => {

    const $ = (el) => document.querySelector(el);

    //nav settings
    const nav = $('.nav');

    nav.addEventListener('click', (e) => {
        if(e.target.classList.contains('nav__menu-item')){
            burger.classList.remove('burger-active');
            menu.classList.remove('nav__menu-active');
        }
    });
    //nav settings

    //burger settigns
    const burger = $('.nav__burger'),
    menu = $('.nav__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('nav__menu-active');
    });
    //burger settigns
    
});