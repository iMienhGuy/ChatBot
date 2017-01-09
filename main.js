$(document).ready(function(){

	$("#first")
		.fadeIn(1500)
		.animate({top : "-=500"}, {duration: 1500, queue: false});
	$("#first")
		.fadeOut(1500);

	/*
	$("#second").setTimeout(function() {
		$("#second").fadeIn(1500);
	}, 1000);
	*/

	$("#user").fadeIn();

	/*
	
	 $("#first").animate({
		opacity: 1,
		top: "-=500"		
	}, 1500, function() {
		// Animation Complete
	});
	*/
	


});