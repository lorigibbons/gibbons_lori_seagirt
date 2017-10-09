//@prepros-prepend vendor/jquery.fitvids.js
//@prepros-append vendor/owl.carousel.js


//= include ../../../bower_components/jquery/dist/jquery.js
//= include ../../../bower_components/jquery.fitvids/jquery.fitvids.js

//Like document.ready
jQuery ( function($) {

	var site = new SiteController($);
	site.init();

});

function SiteController($)
{
	self.init = function()  //functions are being called when loads, like document.ready
	{
		initFitVid();
		initMobileNav();
		initOwl();
	}

	//OWL carousel
	function initOwl() {
		$(".owl-carousel").owlCarousel({
			margin: 10,
	    autoWidth:true,
	    items:7,
			loop: true,
			autoplay:true,
		 autoplayTimeout:2000,
		 autoplayHoverPause:true
		});
	};

	// MAKES VIDEOS RESIZE RESPONSIVELY
	function initFitVid() {
	// TARGET YOUTUBE
		$('iframe[src*="youtube"]').parent().fitVids();

	// TARGET VIMEO
	// 	$('iframe[src*="vimeo"]').parent().fitVids();
	//
	 }

	//MOBILE NAV
	function initMobileNav() {
		//Click on trigger, open mobile nav
		$('.js-mobile-trigger').click(function(e) {
			e.preventDefault();//prevents mobile trigger link from going to another page
			$('.js-mobile-nav').addClass('open');
		});

		//Click on close button, close mobile nav
		$('.js-mobile-nav-close').click(function(e) {
			e.preventDefault();//prevents mobile trigger link from going to another page
			$('.js-mobile-nav').removeClass('open');
		});
	}

	return self;
}
