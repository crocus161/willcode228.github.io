window.addEventListener('load', () => {
	
	//preloader
	const preloader = document.querySelector('.preloader');
	setTimeout(() => {
		preloader.style.opacity = 0;
		preloader.style.zIndex = -1;
		setTimeout(() => {
			preloader.style.display = 'none';
		}, 4000);
	}, 3000);
	//preloader
	
	//fixed nav on scroll
		const nav = document.querySelector('.nav');	
		//nav settings
		if(window.innerWidth >= 1920){
			nav.classList.toggle('nav-active');
			window.addEventListener('scroll', () => {
				nav.classList.toggle('nav-active', scrollY >= 0);
			});
		}else{
			window.addEventListener('scroll', () => {
				nav.classList.toggle('nav-active', scrollY > 85);
			});
		}
		//nav settings
	
	//fixed nav on scroll
	
	//burger settings
		const burger_btn = document.querySelector('.nav__burgerBtn-btn'),
					burger =  document.querySelector('.nav__list');
		burger_btn.addEventListener('click', () => {
			burger.classList.toggle('nav__list-active');
		});
	//burger settings
	
	//carousel settings
	function carousel_init(wrap_elem,elem_of_carousel,prev_btn_elem,next_btn_elem){
		const main_box = document.querySelector(`.${wrap_elem}`),
		      elements = document.querySelectorAll(`.${elem_of_carousel}`);
		let flag = 0;
		
		main_box.addEventListener('click', (e) => {
			if(e.target.className.includes(`${prev_btn_elem}`)){
				elements[flag].classList.remove('carousel__active');
				flag -= 1;
				if(flag < 0){
					flag = elements.length - 1;
				}
				elements[flag].classList.add('carousel__active');
			}else if(e.target.className.includes(`${next_btn_elem}`)){
				elements[flag].classList.remove('carousel__active');
				flag += 1;
				if(flag >= elements.length){
					flag = 0;
				}
				elements[flag].classList.add('carousel__active');
			}
			console.log(flag);
		});
	}
	carousel_init('advanteges__wrap', 'advanteges__box', 'prev__btn', 'next__btn');
	carousel_init('comments__wrap', 'comments__box', 'prev__btn', 'next__btn');
	//carousel settings
	
	//map settings
	const map_open_btn = document.querySelector('.map__wrap-btn'),
				map_close_btn = document.querySelector('.map__iframe-btn'),
				map = document.querySelector('.map__iframe');
	
	map_open_btn.addEventListener('click', () => {
		map.classList.add('map__iframe-active');
	});
	map_close_btn.addEventListener('click', () => {
		map.classList.remove('map__iframe-active');
	});
	//map settings
	
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
	
});