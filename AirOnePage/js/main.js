window.addEventListener('load', () => {
	
	//preloader settings
	const preloader = document.querySelector('.preloader');
	setTimeout(() => {
		preloader.style.opacity = 0;
		preloader.style.pointerEvents = 'none';
		setTimeout(() => { preloader.style.display = 'none'; }, 1000);
	}, 2000);
	//preloader settings
	
	//fixed nav on scroll
		const nav = document.querySelector('.nav');	
//		//nav settings
		if(window.innerWidth >= 1920){
			nav.classList.toggle('nav-active');
		}else if(window.innerWidth < 1920 && window.innerWidth >= 1240){
			window.addEventListener('scroll', () => {
				nav.classList.toggle('nav-active', scrollY > 100);
			});
		}else if(window.innerWidth < 1240){
			nav.classList.toggle('nav-active');
			window.addEventListener('scroll', () => {
				nav.classList.toggle('nav-active', scrollY >= 0);
			});
		}
		//nav settings
	const btn_to_open_burger = document.querySelector('.nav__burgerBtn-btn'),
				burger_menu = document.querySelector('.nav__menu');
	btn_to_open_burger.addEventListener('click', () => {
		burger_menu.classList.toggle('nav__menu-active');
	});
	
	//fixed nav on scroll
	
	
	
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