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
	
	//fixed navigation on scroll
	const navigation = document.querySelector('.header__nav');
	window.addEventListener('scroll', () => {
		navigation.classList.toggle('header__nav-active', scrollY > 54);
	});
	//fixed navigation on scroll
	
	//settings for btn that open burger menu for Phone
	const burger = document.querySelector('.header__nav-burger');
	const btnToOpenBurger = document.querySelector('.header__nav-burger-btn');
	btnToOpenBurger.addEventListener('click', () => {
		burger.classList.toggle('header__nav-burger-active');
	});
	//settings for btn that open burger menu for Phone
	
	
	
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
 
