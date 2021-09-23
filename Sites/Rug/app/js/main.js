window.addEventListener('load', () => {

    const $ = selector => document.querySelector(selector);
    const $all = selector => document.querySelectorAll(selector);

    let accWrapper = $('.meta__wrapper'),
        accordions = $all('.accordion');

    accWrapper.addEventListener('click', (e) => {
        let element = e.target;

        if(!e.target.classList.contains('accordion')) return;
        let panel = element.nextElementSibling;

        if(element.classList.contains('active')){
            element.classList.remove('active');
            panel.style.maxHeight = null;
        }else{
            accordions.forEach((el) => {
                el.classList.remove('active');
                el.nextElementSibling.style.maxHeight = null;
            });

            element.classList.toggle('active');
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

    });

    
});
