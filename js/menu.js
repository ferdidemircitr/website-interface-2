
$(function () {
	var iletisim = document.getElementById("iletisim");
	var x = iletisim.offsetTop;
	$(window).scroll(function(){
		if (scrollY >= x) {
			$('.nav').addClass('background');
		}else{
			$('.nav').removeClass('background');
		}
	});
});