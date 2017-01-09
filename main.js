$(document).ready(function(){
    $("#first")
      .fadeIn(1500)
      .animate({top : "-=500"}, {duration: 1500, queue: false});
      $("#first").fadeOut(1500);
    $("#click")
    	.fadeIn(3000)
    	.animate({top : "-=550"}, {duration: 1500, queue: false});
	   

    document.getElementById("first").innerHTML = "My name is Chat Box";
    $("#first").fadeIn(1500);
    $("#user").fadeIn(5000);

      $('#submit').click(function() {
  //  $(this).next().toggle();
  		$('#user').hide();
   		$('h1').fadeIn(1000);
   		$('.smallChatBox').fadeIn(1000);
   		$('.bigChatBox').fadeIn(1000);
   		$('.welcome').fadeIn(1000);


	});
      

})
