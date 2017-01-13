$(document).ready(function() { 
	$("#portfolio_grid").mixItUp();
	$(".filter_div li").click(function() {
		$(".filter_div li").removeClass("active");
		$(this).addClass("active");
	});

	$('.angelshop_slider').slick({
		autoplay: false,
		arrows: true,
		appendArrows: $(".deep_cont"),
		prevArrow: "<span class='arr a glyphicon glyphicon-menu-left'></span>",
		nextArrow: "<span class='arr b glyphicon glyphicon-menu-right'></span>",
	});


	

});