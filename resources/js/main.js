
$(document).ready(function(){
	// carousel options
	$('.carousel').slick({
		slidesToShow: 1,
		autoplay: false,
		autoplaySpeed: 3000,
		arrows: false,
		draggable: false,
		pauseOnFocus: false,
		pauseOnHover: false,
	});

	// Hide nav bar when scroll (x)
	var pageScroll = 0;
	// when the window scrolls run function
	$( window ).scroll(function() {
		// Get current vertical position of scroll bar of this(window) (y)
		var scrollTop = $(this).scrollTop(); 
		// if statement is true, create variable
		if (scrollTop > (pageScroll + 50)) {
			var navHeight = $('.nav').height();
			$('.nav').animate({
				top: -navHeight}, 150);
			pageScroll = scrollTop;
		} else if (pageScroll > (scrollTop + 50)) {
				$('.nav').animate({
				top: 0}, 150);
				pageScroll = scrollTop;
		}
	});
});