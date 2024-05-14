$(function(){
    $('.doctorSlider').owlCarousel({
        loop:true,
        margin:30,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 500,
        dots: false,
        nav: false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
                autoplay: false,
                loop: false,
            },
            1200:{
                items:3,
                autoplay: false,
                loop: false,
            },
        }
    });
});