let width = window.innerWidth,
    flag = false;
    
if (width <= 576) flag = true;

AOS.init({
    disable: flag,
    startEvent: 'DOMContentLoaded',
    easing: 'linear',
    duration: 1000,
    once: false,
});