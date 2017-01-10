$(document).ready(function(){

    //$("#first").animate({top : "-=500"}, {duration: 1500, queue: false});
  //    $("#first").fadeOut(1500);
    //$("#user").animate({top : "-=550"}, {duration: 1500, queue: false});
	   //  $("#first").fadeOut(1500);
       //  $("#first").fadeIn(1500);

    /*document.getElementById("first").innerHTML = "My name is Chat Box";
    $("#first").fadeIn(1500); 
    $("#user").fadeIn(5000);
    */

    setTimeout(function() {
       //  var first = document.getElementById("first");
        // first.style.display = "none";
        var second = document.getElementById("second");
        second.style.visibility = "visible";


    }, 5000)
      
    
      $('#submit').click(function() {
  		$('#user').hide();
   		$('h1').fadeIn(1000);
   		$('.smallChatBox').fadeIn(1000);
   		$('.bigChatBox').fadeIn(1000);
   		$('.welcome').fadeIn(1000);


	});
      

})
