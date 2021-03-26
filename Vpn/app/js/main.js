window.addEventListener('load', () => {

    const $ = (el) => document.querySelector(el);

    //hide preloader
    const preloader = $('.preloader');
    setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 4000);
    //hide preloader

    //nav settings
    const nav = $('.nav');

    nav.addEventListener('click', (e) => {
        if(e.target.classList.contains('nav__menu-item')){
            setTimeout(() => {
                burger.classList.remove('burger-active');
                menu.classList.remove('nav__menu-active');
            }, 700);
        }
    });


    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav-active', scrollY > 0)
    });
    //nav settings

    //burger settings
    const burger = $('.nav__burger'),
    menu = $('.nav__menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        menu.classList.toggle('nav__menu-active');
    });
    //burger settings

    //smooth scroll
	let linkNav = document.querySelectorAll('[href^="#"]'), 
    V = 0.3;
    for (let i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) { 
            e.preventDefault(); 
            let w = window.pageYOffset,  
                hash = this.href.replace(/[^#]*(.*)/, '$1');
            t = document.querySelector(hash).getBoundingClientRect().top, 
                start = null;
            requestAnimationFrame(step);
            function step(time) {
                if (start === null) start = time;
                let progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        }, false);
    }


    //module window settings
    let popup = $('.popup'),
        open_popup =  $('.footer__popup-open'),
        close_popup =  $('.popup__btn-close');
    open_popup.addEventListener('click', () => {
        popup.classList.add('popup-active');
    });
    close_popup.addEventListener('click', () => {
        popup.classList.remove('popup-active');
    });
    //module window settings

    //swiper settings
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        infinite: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
          },
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            576: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1192: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
      });
    //swiper settings
    
});