$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
        loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		speed: 900
        // autoplay: true
    });

    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header__nav').addClass('active');
        } else {
            $('.header__nav').removeClass('active')
        }
    });

    // MixItUp jquery plugin
    // $(function(){
    //     $('.portfolio__wrapper').mixItUp({
    //         selectors: {
    //             target: '.mix',
    //             filter: '.portfolio__choose-btn',
    //         },
    //         load: {
    //             filter: 'all'
    //         },
    //         controls: {
    //             enable: true,
    //             activeClass: 'on'
    //         },
    //         animation: {
    //             enable: true,
    //             effects: 'scale fade',
    //             duration: 900
    //         }
    //     });
    // });
    // End MixItUp jquery plugin
});