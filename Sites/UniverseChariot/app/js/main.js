window.addEventListener('load', () => {
    const $ = el => document.querySelector(el);

    const photoBar = $('.photo__bar'),
        photoActive = $('.photo__active-img');


    photoBar.addEventListener('click', (e) => {
        let element = e.target;
        if(!element.classList.contains('photo__bar-img')) return;
        let activeBarImgSrc = element.getAttribute('src');
        photoActive.setAttribute('src', activeBarImgSrc)
    });
});
