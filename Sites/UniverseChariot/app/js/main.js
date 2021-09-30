window.addEventListener('load', () => {
    const $ = el => document.querySelector(el);

    const photoBar = $('.photo__bar'),
        photoActive = $('.photo__active-img');

    const modalOpen = $('.header__play'),
        modal = $('.modal'),
        modalClose = modal.querySelector('button'),
        video = modal.querySelector('video');


    photoBar.addEventListener('click', (e) => {
        let element = e.target;
        if(!element.classList.contains('photo__bar-img')) return;
        let activeBarImgSrc = element.getAttribute('src');
        photoActive.setAttribute('src', activeBarImgSrc)
    });

    modalOpen.addEventListener('click', () => {
        modal.classList.add('active');
        video.play();
    });

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        video.pause();
    });

});
