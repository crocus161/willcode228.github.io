window.addEventListener('load', () => {
    const $ = element => document.querySelector(element);

    const burger = $('.nav__burger'),
            nav_list = $('.nav__list');
    console.log(burger);
    burger.addEventListener('click', () => {
        nav_list.classList.toggle('nav__list-active');
    });
});