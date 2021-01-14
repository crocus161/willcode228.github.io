window.addEventListener('load', () => {
	//preloader settings
	const preloader = document.querySelector('.preloader');
	setTimeout(() => {
		preloader.style.opacity = 0;
		preloader.style.zIndex = -1;
		setTimeout(() => {
			preloader.style.display = 'none';
		},2500);
	},2500);
	
	//burger menu settings
	const burgerBtn = document.querySelector('.nav__burger-btn');
	const navList = document.querySelector('.nav__list');
	burgerBtn.addEventListener('click', () => {
		navList.classList.toggle('nav__list-active');
	});
	
	//fixed navigation bar on scroll
	const nav = document.querySelector('.nav');
	window.addEventListener('scroll', () => {
		nav.classList.toggle('header__nav-active', scrollY > 70);
	});
	
	//slider settings
	function create_slider(data,wrap_elem,class_of_elem,secondary_class_of_elem){
		const photo_box = document.querySelector(`.${wrap_elem}`);
		data.sort(() => {
			return Math.random() - Math.random();
		});
		
		function getRandomeNumber(x,y){
			return Math.round((Math.random() * y) - Math.random() * x); 
		}
		for(let i = 0; i < data.length; i++){
			let img = document.createElement('img');
			img.setAttribute('src', data[i]);
			img.setAttribute('load', 'lazy');
			img.className = `${class_of_elem}`;
			img.style.transform = `translate(-50%, -50%) rotate(${getRandomeNumber(-20,15)}deg)`;
			photo_box.appendChild(img);
		}
		let flag_for_anim = 0;
		let flag_for_func = 0;
		photo_box.addEventListener('click', (e) => {
			if(e.target.className == `${class_of_elem}`){
				flag_for_anim++;
				flag_for_func++;
				if(flag_for_anim == 1) e.target.classList.add(`${class_of_elem}-up`);
				if(flag_for_anim == 2) e.target.classList.add(`${class_of_elem}-down`);
				if(flag_for_anim == 3) e.target.classList.add(`${class_of_elem}-right`);
				if(flag_for_anim == 4){
					e.target.classList.add(`${class_of_elem}-left`);
					flag_for_anim = 0;
				}
				if(flag_for_func == data.length){
					create_slider(data,wrap_elem,class_of_elem);
					flag_for_func = 0;
				}
			}
		});
	}
	
	create_slider(['img/Photoblog-img/Photoblog1.jpg','img/Photoblog-img/Photoblog2.jpg','img/Photoblog-img/Photoblog3.jpg','img/Photoblog-img/Photoblog4.jpg','img/Photoblog-img/Photoblog5.jpg'], 'photoblog__box', 'photo__box-img','photoblog__box-img');
	create_slider(['img/jewelleries/jewellery.gif','img/jewelleries/jewellery1.gif','img/jewelleries/jewellery2.gif','img/jewelleries/jewellery3.gif','img/jewelleries/mercury.png'], 'examples__box', 'photo__box-img','examples__box-img');
	
	
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
