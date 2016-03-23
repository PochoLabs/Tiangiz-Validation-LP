$(document).ready(function(){
	// Make .q-box's same height
	var opt1height = $('.opt-1').height();
	var opt2height = $('.opt-2').height();

	console.log(opt1height + 'px');
	console.log(opt2height + 'px');

	if (opt1height >= opt2height) {
		$('.opt-2').height(opt1height);
	}else {
		$('.opt-1').height(opt2height);
	}

	// Make .feature-gradient be full height

	var wHeight = $(window).height();

	$('.feature-gradient').css('min-height', wHeight + 'px');

	// Animate boxes

	$('.q-box').hover(function(){
		$(this).addClass('animated').addClass('pulse');
	}, function(){
		$(this).removeClass('animated').removeClass('pulse');
	})
});
