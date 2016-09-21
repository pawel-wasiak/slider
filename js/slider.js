(function ($) {
'use strict';

$.fn.slider  = function (o) {

	// slider default settings
        var defaults        = {

            width           : '100vw',
            height          : '100vh',

            animtype        : null,
            delay       	: 4000,
            automatic       : true, 
            

            showcontrols    : true,     
            colorcontrols	: '#0085F6',

            randomstart     : false     

        };

        // create settings from defauls and user options
        var settings        = $.extend({}, defaults, o);

        if(settings.delay < 2000) settings.delay = 2000; 

        // variables

        var $wrapper 		= $('.slider-wrapper'),
        	$slider 		= $('.slider-container'),
        	$arrowcontrols	= $slider.find('.arrow'),
        	$arrowLeft 		= $slider.find('#prev'),
        	$arrowRight 	= $slider.find('#next'),
        	$slides			= $slider.find('.items'),
        	$info			= $slider.find('.info'),
        	$active 		= 'active',
            $fade           = 'fadeInUp',
        	$animateSlide 	= 'slide-animation',
        	timer 			= 0,
        	number 			= -1,
            numbernew       = 0;

        function tabSlides () {
        	var tab = [];
        	$slides.each(function() {
        		tab.push($(this));
        	});

        	return tab;
        };

        var tabslides = tabSlides();

        var init = function () {
        	if(settings.randomstart === true) random();

        	changeSlide();
        	
            $arrowLeft.click(prevSlide);
        	
            $arrowRight.click(nextSlide);

        	if((settings.width != defaults.width) || (settings.height != defaults.height))
        	{
        		changeSizeSlider();
        	}

        	if(settings.showcontrols != true) {
        		showControls();
        	}

        	if(settings.colorcontrols != defaults.colorcontrols) {
        		changeArrowColors();
        	}
        };

        var changeSlide = function () {
        	number++;

        	if(number > (tabslides.length - 1)) number = 0;

        	$slides.removeClass($active);
        	
            if(settings.animtype != null) $slides.removeClass(settings.animtype);
        	
            tabslides[number].addClass($active);
        	
            if(settings.animtype != null) {

                animationType(number);
            }
        	
            animationCaption(number);

            numbernew = number - 1;

            if(numbernew >= 0) {

                tabslides[numbernew].addClass($animateSlide);
                setTimeout(function() { 
                    tabslides[numbernew].removeClass($animateSlide);
                }, 500);

            }

            else if(numbernew < 0) {
                numbernew = tabslides.length - 1;
                tabslides[numbernew].addClass($animateSlide);
                setTimeout(function() { 
                    tabslides[numbernew].removeClass($animateSlide);
                }, 500);
            }

            timerStart();
        };

        var nextSlide = function () {
        	changeSlide();
        };

        var prevSlide = function () {
        	number--;

        	if(number < 0 ) number = (tabslides.length - 1);

            $slides.removeClass($active);

            if(settings.animtype != null) $slides.removeClass(settings.animtype);

            tabslides[number].addClass($active);

            if(settings.animtype != null) {

                animationType(number);
            }
            
            animationCaption(number);

            numbernew = number + 1;

            if(numbernew >= 0 && number != (tabslides.length - 1)) {

                tabslides[numbernew].addClass($animateSlide);
                setTimeout(function() { 
                    tabslides[numbernew].removeClass($animateSlide);
                }, 500);

            }

            else if(number == (tabslides.length - 1)) {
                numbernew = 0;
                tabslides[numbernew].addClass($animateSlide);
                setTimeout(function() { 
                    tabslides[numbernew].removeClass($animateSlide);
                }, 500);
            }

            timerStart();
        };

        var changeSizeSlider = function () {
        	var width = settings.width,
        		height = settings.height;

        	$wrapper.css({
        		'width': width,
        		'height': height
        	});
        };

        var timerStart = function () {
        	if(settings.automatic === true) {
        		clearInterval(timer);
        		timer = setInterval(changeSlide, settings.delay);
        	}
        };

        var animationCaption = function (number) {
            $info.removeClass($fade);
            tabslides[number].find('.info').addClass($fade);
        }

        var animationType = function (number) {

        	if(settings.animtype === 'zoomIn')
        	{
        		tabslides[number].addClass('zoomIn');
        	}

        	if(settings.animtype === 'fadeIn')
        	{
        		tabslides[number].addClass('fadeIn');
        	}
        };

        var showControls = function () {
        	$arrowcontrols.hide();
        };

        var changeArrowColors = function () {
        	$arrowcontrols.css({
        		'backgroundColor': settings.colorcontrols
        	});
        };

        var random = function () {
    		number = Math.floor((Math.random() * $slides.length));
    		tabslides[number].addClass($active);
        };

        init();
};

})(jQuery);