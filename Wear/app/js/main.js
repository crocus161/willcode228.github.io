window.addEventListener('load', () => {

    const $ = item => document.querySelector(`.${item}`);

	//preloader
	const preloader = $('preloader');
	setTimeout(() => {
		preloader.style.opacity = 0;
		setTimeout(() => {
			preloader.style.display = 'none';
		}, 1000);
	}, 2000);

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

    const swiper = new Swiper(".photoblog", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
    });
    
});