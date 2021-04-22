const preloader = ($) => {
    const preloader = $('loader__wrap'),
            main__wrapper = $('main');
    
    setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
            main__wrapper.classList.add('main-active');
        }, 700);
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1500);
    }, 3000);
}

export default preloader;