var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 100){
        $(".menu-wrapper").css({"background": "black","box-shadow": "0 0 12px 0 #2d2d2d"});
        $(".back").css({"opacity":"1"});
    }
    if(100 > scrolled){
        $(".menu-wrapper").css({"background": "transparent","box-shadow": "none"});
        $(".back").css({"opacity":"0"});
    }
    if(1 > scrolled){
    	$(".nav ul li a").siblings().removeClass('blink');
    }

};
// Первая карусель
		$(document).ready(function() {
		 $("#myCarousel").owlCarousel({
		 nav:false,
		 loop:true,
		 dots:false,
		 dotData:false,
		 pagination:false,
		 autoplay:true,
		 smartSpeed:1000,
		 autoplayTimeout:4000,
		 responsive:{ 
                    0:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
		})
	});
	// Вторая карусель
	$(document).ready(function() {
		 $("#myCarouselTwo").owlCarousel({
		 nav:false,
		 loop:true,
		 dots:true,
		 dotData:true,
		 pagination:true,
		 autoplay:true,
		 smartSpeed:1500,
		 autoplayTimeout:6000,
		 responsive:{
                    0:{
                        items:1
                    },
                    768:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
		})
	});
	// Циферки
	$('.count').each(function () {
		"use strict"
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 10000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
   $(document).ready(function() {
        $(window).stellar();
    });
    $('.nav').on('click', 'a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 1
        }, 1000);
        event.preventDefault();
    });
    $(function(){
    	$(".nav ul li a").click(function(e){
    		e.preventDefault();
    		$(".nav ul li a").siblings().removeClass('blink');
    		$(this).siblings().addClass('blink');
    	})
    });
