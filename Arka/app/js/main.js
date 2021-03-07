window.addEventListener('load', () => {
    const burger = document.querySelector('.nav__burger-btn'),
          menu = document.querySelector('.nav__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('nav__menu-active');
    });

    menu.addEventListener('click', (e) => {
        setTimeout(() => {
            if(e.target.classList.contains('nav__link')){
                menu.classList.remove('nav__menu-active');
                burger.classList.remove('burger-active');
            }
        }, 300);
    });

});