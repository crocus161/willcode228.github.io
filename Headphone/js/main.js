window.addEventListener('load', () => {
    
    //preloader settigns
    const preloader = document.querySelector('.wrap__loader');
    setTimeout(() => {
        preloader.classList.add('loader__remove');
    }, 3000);
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 4000);
    //preloader settigns

    const burger_open_btn = document.querySelector('.nav__btn'),
          burger_close_btn = document.querySelector('.close__burger-btn'),
          burger_menu = document.querySelector('.nav__menu'),
          nav = document.querySelector('.nav'),
          buy_btn = document.querySelectorAll('.productList__info-btn'),
          modal_form = document.querySelector('.modal__form'),
          close_modal_form = document.querySelector('.modal__form-close'),
          contacts_map = document.querySelector('.contacts__map');


    burger_open_btn.addEventListener('click', () => {
        burger_menu.style.right = 0;
    });
    //burger menu settings
    burger_menu.addEventListener('click', (e) => {
        if(e.target.classList.contains('nav__menu-item')){
            burger_close_btn.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                burger_menu.style.right = '-150%';
                burger_close_btn.style.transform = 'rotate(0deg)';
            }, 500)
        }
    });
    //burger menu settings

    //active nav on scroll
    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav__active', scrollY > 20);
    });
    //active nav on scroll

    //buy btn setting
    for(let i = 0; i < buy_btn.length; i++){
        buy_btn[i].addEventListener('click', () => {
            modal_form.classList.add('modal__form-active');
        });
    }
    //buy btn setting
    //close modal btn setting
    close_modal_form.addEventListener('click', () => {
        close_modal_form.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            modal_form.classList.remove('modal__form-active');
            close_modal_form.style.transform = 'rotate(0deg)';
        }, 500)
    });
    //close modal btn setting


    // settings of number animation
    setNumAnim('numbers__item-h2-1')
    setNumAnim('numbers__item-h2-2')
    setNumAnim('numbers__item-h2-3')
    setNumAnim('numbers__item-h2-4')
    
    function setNumAnim(elem){
        var number = document.querySelector(`.${elem}`),
        numberTop = number.getBoundingClientRect().top,
        start = +number.innerHTML, end = +number.dataset.max;

        window.addEventListener('scroll', function onScroll() {
            if(window.pageYOffset > numberTop - window.innerHeight / 1.5) {
                this.removeEventListener('scroll', onScroll);
                var interval = setInterval(function() {
                    number.innerHTML = ++start;
                    if(start == end) {
                        clearInterval(interval);
                    }
                }, 5);
            }
        });
    }
    // settings of number animation

    //map lazy loading
    window.addEventListener('scroll', function load_map(){
        let map_pos = contacts_map.getBoundingClientRect().top;
        if(map_pos <= 666){
            console.log('map is load')
            this.removeEventListener('scroll', load_map);
            contacts_map.innerHTML += '<iframe id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%D0%A1%D0%B5%D0%B4%D1%8C%D0%BC%D0%BE%D0%B5%20%D0%BD%D0%B5%D0%B1%D0%BE%20%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%B0+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>';
        }
    });
    //map lazy loading
});
