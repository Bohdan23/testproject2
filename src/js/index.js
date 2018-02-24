$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical',
        loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		speed: 900,
        autoplay: true,
        allowTouchMove: false
    });

    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header__nav').addClass('active');
        } else {
            $('.header__nav').removeClass('active');
        }
    });
    
    function trigger() {
        $(window).trigger('resize').trigger('scroll');
    }

    $(window).on('resize', trigger());

    // begin Portfolio img
    $('.portfolio__filter-button').on('click', function() {
        $('.portfolio__filter-button.active').removeClass('active');
        $(this).addClass('active');
        setTimeout(trigger, 600)
    });

    $('.portfolio__block').on('click', function() {
        var img = $(this).find('.main-img').attr('src'),
            caption = $(this).find('.portfolio__block-name').text();
        $('.modal-wrapper').addClass('active');
        $('.modal-content').attr('src', img);
        $('.modal-caption').text(caption);

    });

    $('.modal-wrapper').on('click', '.modal-close', function() {
        $('.modal-wrapper').removeClass('active');
    });
    $('.modal-wrapper').on('click', function(e) {
        var modal = $('.modal-wrapper');
        if (modal.is(e.target)) {
            modal.removeClass('active')
        }
    });
    // end portfolio img

    // begin MixItUp jquery plugin
    $(function(){
        $('.portfolio__wrapper').mixItUp({
            selectors: {
                target: '.mix',
                filter: '.portfolio__filter-button',
            },
            load: {
                filter: 'all'
            },
            controls: {
                enable: true,
                activeClass: 'on'
            },
            animation: {
                enable: true,
                effects: 'fade translateZ(-100px)',
                duration: 300
            }
        });
    });
    // end MixItUp jquery plugin

    // begin Input Animation
    $('.text-wrapper').find('input, textarea').focusout(function() {
        if( $(this).val() != '' ) {
            $(this).siblings('span').addClass('focused')   
        } else if ( $(this).val() == '' ) {
            $(this).siblings('span').removeClass('focused')
        }
    });
    // end Input Animation

    // begin scroll events 
    $('.header__nav').on('click', 'a', function(e) {
        e.preventDefault();
        var idSection = $(this).attr('href'),
            section = $(idSection).offset().top + 1;
        $('body, html').animate({scrollTop: section}, 1500);
        if($('.header__nav').hasClass('active')) {
            setTimeout(function() {
                $('.header__nav, .hamburger').removeClass('active');
            }, 1600)
        }
    });

    function onScroll() {
        var scrollTop = $(document).scrollTop();
        $('.header__nav a').each(function() {
            var hash = $(this).attr('href'),
                target = $(hash);
            if (target.position().top <= scrollTop &&  target.position().top + target.outerHeight() > scrollTop) {
                $('.header__nav li.active').removeClass('active');
                $(this).parent('li').addClass('active');
            } else {
                $(this).parent('li').removeClass('active');
            }
        });
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    }

    $(document).on('scroll', onScroll);
    // end scroll events 
});