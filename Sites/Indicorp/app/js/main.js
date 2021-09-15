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

    //active nav on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('active-nav', scrollY > 0);
    });
    //active nav on scroll


    //burger btn and menu settings
    const burger_btn = document.querySelector('.burger-btn'),
            close_menu = document.querySelector('.close__menu'),
            menu = document.querySelector('.nav__menu');
    burger_btn.addEventListener('click', () => {
        menu.classList.add('active-menu');
    });
    close_menu.addEventListener('click', (e) => {
        e.preventDefault();
        menu.classList.remove('active-menu');
    });
    //burger btn and menu settings

    //smooth scroll
    let linkNav = document.querySelectorAll('[href^="#"]'),
        V = 0.5;
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