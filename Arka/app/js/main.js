window.addEventListener('load', () => {

    //preloader settings

    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 3000);

    //preloader settings



    //navigation settings
    const burger = document.querySelector('.nav__burger-btn'),
        menu = document.querySelector('.nav__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('nav__menu-active');
    });

    menu.addEventListener('click', (e) => {
        setTimeout(() => {
            if (e.target.classList.contains('nav__link')) {
                menu.classList.remove('nav__menu-active');
                burger.classList.remove('burger-active');
            }
        }, 300);
    });
    //navigation settings

    //smooth scroll
    let linkNav = document.querySelectorAll('[href^="#"]'),
        V = 0.4;
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function (e) {
            e.preventDefault();
            let w = window.pageYOffset,
                hash = this.href.replace(/[^#]*(.*)/, '$1');
            t = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);
            function step(time) {
                if (start === null) start = time;
                let progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        }, false);
    }
    //smooth scroll

});