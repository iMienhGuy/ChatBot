$(document).ready(function(){

	$("#first")
		.fadeIn(1500)
		.animate({top : "-=500"}, {duration: 1500, queue: false});
	$("#first").fadeOut(1500, function(){
		$("#second").fadeIn(1500, function(){
			$("#second").fadeOut(1500, function(){
				$("#third").fadeIn(1500, function(){
					$("#name").fadeIn();
					$("#name").animate({height:"200px", width:"350px"});
					$("#name").children("p").animate({fontSize:"25px"}, function(){
						$("#user").fadeIn(1500);
					});
				})
			});
		});
	});

	$("#submit").click(function(){
		$("#third").fadeOut(1500);
		$("#name").fadeOut(1500, function(){
			$("#container").fadeIn(1500);
		});
	})

});