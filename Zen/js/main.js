window.addEventListener('load', () => {

    //active nav on scroll
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('nav-active', scrollY > 0);
    });
    //active nav on scroll


});