window.addEventListener('load', () => {
	
	//preloader
	const preloader = document.querySelector('.preloader');
	setTimeout(()=>{
		preloader.style.opacity = 0;
		preloader.style.zIndex = -1;
		setTimeout(()=>{
			preloader.style.display = 'none';
		},3000);
	}, 3000);
	
	
	
	const new_menu = document.querySelector('.burger-ul');
	const old_menu = document.querySelectorAll('.header__menu-ul');
	
	//function to remove old menu and add new(burger) menu for phone width
	if(window.innerWidth < 810){
		for(let i = 0; i < old_menu.length; i++){
			new_menu.innerHTML += old_menu[i].innerHTML;	
		}
	}
	
	//open new(burger) menu
	const burger = document.querySelector('.burger');
	const btnToOpenBurger = document.querySelector('.header__burger-btn');
	btnToOpenBurger.addEventListener('click', () => {
		burger.classList.toggle('burger-active');
	});
	
	//sticky navbar when user scroll
	window.addEventListener('scroll', () => {
		const nav = document.querySelector('.header__nav');
		nav.classList.toggle('nav-sticky', window.scrollY > 90);
	});
	
	//unusual checkbox for tabs
	const checkbox = document.querySelector('.plan__checkbox');
	
	checkbox.addEventListener('click', (e) => {
		
		if(e.target.classList.contains("plan__checkbox-h4-active")){
			
			let notActive = document.querySelector('.plan__checkbox-h4');
			notActive.classList.add('plan__checkbox-h4-active');
			e.target.classList.remove('plan__checkbox-h4-active');
			
		}else if(e.target.classList.contains("plan__checkbox-h4")){
			
			let active = document.querySelector('.plan__checkbox-h4-active');
			active.classList.remove('plan__checkbox-h4-active');
			e.target.classList.add('plan__checkbox-h4-active');	
			
		}
		
		
		const individual = document.querySelector('.individual'),
					company = document.querySelector('.company');
		
		if(e.target.getAttribute('data-attr') == 'individual'){
			
			company.style.opacity = 0;
			setTimeout(()=>{
				company.classList.remove('plan__box-active');
				individual.classList.add('plan__box-active');
			}, 1040);
			individual.style.opacity = 1;
			
		}else if(e.target.getAttribute('data-attr') == 'company'){
			
			individual.style.opacity = 0;
			setTimeout(()=>{
				individual.classList.remove('plan__box-active');
				company.classList.add('plan__box-active');
			}, 1040);
			company.style.opacity = 1;
		}
		
	});
	
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
	//swiper settings
	let swiper = new Swiper('.swiper-container', {
		pagination: {
		el: '.swiper-pagination',
		dynamicBullets: true,
		},
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	});
});