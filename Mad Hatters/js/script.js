window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');

    setTimeout(() => {
        preloader.style.opacity = 0;
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1000);
    }, 4000);
});