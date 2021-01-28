$(document).ready(function(){


    //not load vide js with small device
    if ($(window).width() > '650'){
        $('.header__body').vide('img/dest/vide_set/air/airpods', {
        className: 'header__airpods-bg'
        });
        $('.product').vide('img/dest/vide_set/vide/vide', {
            className: 'product__soundWave-bg'
        });
        $('.shoping').vide('img/dest/vide_set/comfortable/comfortable', {
            className: 'shoping__speakingMan-bg'
        });
    }


    //smooth scroll behaivior on anchore link
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var sc = $(this).attr("href"),
            dn = $(sc).offset().top - 70;
        $('html, body').animate({scrollTop: dn}, 1000);
    });


    //slick settings
    $('.productList__slider-wrap').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
            breakpoint: 1115,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '60px',
                    slidesToShow: 3
                }
            },
            {
            breakpoint: 1115,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '60px',
                    slidesToShow: 2
                }
            },
            {
            breakpoint: 780,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    });

$('.comments__slider-wrap').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
        breakpoint: 1115,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '80px',
            slidesToShow: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1
        }
        }
    ]
  });
});