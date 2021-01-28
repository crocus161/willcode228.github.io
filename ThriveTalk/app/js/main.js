window.addEventListener('load', () => {

	const $ = item => document.querySelector(`.${item}`);
	const $all = item => document.querySelectorAll(`.${item}`);

	//********Preloader********
	const preloader = $('preloader');
	setTimeout(() => {
		preloader.style.opacity = 0;
		setTimeout(() => {
			preloader.style.display = 'none';
		}, 1000);
	}, 5000);

	//********Nav*******
	//nav link animation settings
	const nav = $('nav'),
			nav_menu = $('nav__menu'),
			select_line = $('select-line');

	nav_menu.addEventListener('mouseover', e => {
		let elem = e.target;
		if (elem.classList.contains('nav__menu-item')) {
			const elem_width = elem.offsetWidth,
					elem_left = elem.offsetLeft;
			//padding variable for width and position amendment
			const elem_pad = parseInt(window.getComputedStyle(elem).padding);

			//minus padding of the element at width 
			select_line.style.width = `${elem_width - (elem_pad * 2)}px`;
			//position center
			select_line.style.left = `${elem_left + elem_pad}px`;
		}
	});
	//nav link animation settings//

	//nav animation on scroll
	window.addEventListener('scroll', () => {
		nav.classList.toggle('nav-active', scrollY > 80 || window.innerWidth >= 1920);
	});
	//nav animation on scroll//



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
	//smooth scroll//
	
});