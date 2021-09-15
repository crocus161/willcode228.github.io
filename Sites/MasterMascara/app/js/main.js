window.addEventListener('load', () => {
    const $ = (el) => document.querySelector(el);
    let header = $('.header'),
        headerLeft = $('.header__left'),
        headerRight = $('.header__right');

    header.addEventListener('mouseover', (e) => {
        console.log(e);
        if(e.toElement.classList.contains('leftImg')){
            header.classList.remove('right');
            header.classList.add('left');
        }else{
            header.classList.remove('left');
            header.classList.add('right');
        }
    });
});
