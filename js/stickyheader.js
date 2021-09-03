$(function () {
	$(window).scroll(function(){
		if ($(this).scrollTop() > 60) {
			$('.header').addClass('sticky');
		}else{
			$('.header').removeClass('sticky');
		}
	});
});


