/*$('.parallax-window').parallax({
	speed: 0.1
});*/


$(window).scroll(function(){
	console.log($(this).scrollTop());
	$('section h2').css('transform', 'rotate('+$(this).scrollTop() / 2+'deg)');
});