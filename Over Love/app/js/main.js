$(document).ready(function(){

    //preloader settings
    const $loader = $('.preloader');
    setTimeout(function() {
        $loader.hide(2000);
    }, 2000);
    //preloader settings

    //active navigation on scroll
    $(window).scroll(function() {
        if($(this).scrollTop() > 1) {
            $('.nav').addClass('nav-active');
        } else {
            $('.nav').removeClass('nav-active');
        }
    });
    //active navigation on scroll

    //navigation settings
    const $menu = $('.nav__menu'),
        $burger = $('.nav__burger');

    $burger.on('click', function() {
        $(this).toggleClass('burger-active');
        $menu.toggleClass('nav__menu-active');
    });

    $menu.on('click', function(e) {
        if($(e.target).is('a')){
            setTimeout(function() {
                $menu.removeClass('nav__menu-active');
                $burger.removeClass('burger-active');
            }, 300);
        }
    });
    //navigation settings
    $('.products__slider').slick({
          prevArrow: '<button class="slick-prev"><img src="img/dest/button-icons/prev-arrow.svg"></button>',
          nextArrow: '<button class="slick-next"><img src="img/dest/button-icons/next-arrow.svg"></button>',
          fade: true
    });
});