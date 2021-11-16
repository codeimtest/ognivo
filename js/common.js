document.addEventListener('DOMContentLoaded', function() {

	$('.categories li').click(function(){
		$('.categories li').removeClass('active');
	});
	$('.categories li').click(function(){
		$(this).addClass('active');
	});
	$('.categories-gallery').each(function() { // the containers for all your galleries
		$(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true,
			  tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
			}
		});
	});
	var config = {
		load: {
			filter: '.cat_1'
		  }
	};
	var mixer = mixitup('#categories-gallery',config);
})
