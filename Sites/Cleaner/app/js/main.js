window.addEventListener('load', () => {

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
			}else if(e.target.className.includes(`${next_btn_elem}`)){
				elements[flag].classList.remove('carousel__active');
				flag += 1;
				if(flag >= elements.length){
					flag = 0;
				}
			}
			elements[flag].classList.add('carousel__active');
		});
	}
	carousel_init('reviews__slider', 'reviews__box', 'prev__btn', 'next__btn');
	//carousel settings
});