(function() {

	"use strict";

	if (typeof AOS !== 'undefined') AOS.init({
		ease: 'slide',
		once: true
	});

	var slider = function(){

		var heroSlider = document.querySelectorAll('.hero-slider');

		if (heroSlider.length > 0) {
			var startFallbackHero = function () {
				var container = heroSlider[0];
				var items = Array.prototype.slice.call(container.children);
				if (items.length < 2) return;
				container.classList.add('hero-fallback');
				var active = 0;
				var show = function () {
					items.forEach(function (item, index) { item.classList.toggle('hero-fallback-active', index === active); });
				};
				show();
				window.setInterval(function () { active = (active + 1) % items.length; show(); }, 5000);
			};

			if (typeof tns !== 'undefined') {
				try {
					tns({
						container: '.hero-slider',
						items: 1,
						mode: 'carousel',
						autoplay: true,
						animateIn: 'tns-fadeIn',
						animateOut: 'tns-fadeOut',
						speed: 700,
						nav: true,
						controls: false,
						autoplayButtonOutput: false,
					});
				} catch (error) {
					startFallbackHero();
				}
			} else {
				startFallbackHero();
			}
		}


		var carouselSlider = document.querySelectorAll('.carousel-testimony');

		if ( carouselSlider.length > 0 && typeof tns !== 'undefined' ) {

			var testimonySlider = tns({
				container: '.carousel-testimony',
				items: 1,
				mode: 'carousel',
				autoplay: true,
			  animateIn: 'tns-fadeIn',
		    animateOut: 'tns-fadeOut',
				speed: 700,
				nav: true,
				gutter: 20,
				controls: false,
				autoplayButtonOutput: false,
				responsive:{
					0:{
						items: 1,
						gutter: 0
					},
					600:{
						items: 2,
						gutter: 20
					},
					1000:{
						items: 3,
						gutter: 20
					}
				}
			});

		}

	}
	slider();
	


	var counter = function() {
		function countUp(elem) {
			var current = elem.innerHTML;


			var timeIntervalBeforeIncrement = 2000/elem.getAttribute("data-count")


			var interval = setInterval(increase, timeIntervalBeforeIncrement);

			function increase() {
				elem.innerHTML = current++;
				if (current > elem.getAttribute("data-count")) {
					clearInterval(interval);
				}
			}

		}

		var span = document.querySelectorAll("[id^='count']");

		var i = 0;
		for (i = 0; i < span.length; i++) {
			countUp(span[i]);
		}
	}


	var elements;
	var windowHeight;

	function init() {
		elements = document.querySelectorAll('.ftco-about-section');
		windowHeight = window.innerHeight;
	}

	function checkPosition() {
		var i;
		for (i = 0; i < elements.length; i++) {
			var element = elements[i];
			var positionFromTop = elements[i].getBoundingClientRect().top;
			if (positionFromTop - windowHeight <= 0) {
				if( !element.classList.contains('viewed') ) {
					element.classList.add('viewed');
					counter();	
				} else {
					if ( element.classList.contains('viewed') ) {

					}
				}
				// console.log('igo');

			}
		}
	}
	window.addEventListener('scroll', checkPosition);
	window.addEventListener('resize', init);

	init();
	checkPosition()


	if (typeof GLightbox !== 'undefined') GLightbox({
	  touchNavigation: true,
	  loop: true,
	  autoplayVideos: true
	});

})()
