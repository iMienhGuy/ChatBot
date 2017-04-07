
$(document).ready(function() {

// when I click submit after enter text,
// post it to db to store it. then grab it and 
// append divs inside  bigChatBot. clear text after press enter

/*var $chatlog = $(."bigChatBot");

function addChat() {
  chatlog.append("User :" )
}
*/
//putting var x here makes the first alert undefined for res? why?
 var x;

// do ajax call and use get/post to get input value to backend
// in back end, verify if > 0 and send a response back to front end
// if error, send /400 
$("#user").submit(function(e) {
  e.preventDefault();
  var name = {username : $("#username").val()};
  $.ajax({url: 'http://localhost:1337/login', 
    type : 'POST',
    data: name,
     success: function(res){
       window.location.href = "/chat";
        x = res;
       alert(x);
       console.log("success!", res);
     }
       
  });

 

 // $(".welcome").text("Welcome, " + x);


 

     // way to stop the form from refershing
/*    e.preventDefault();
    var test = $("#username").val();

    console.log(test);
    if(test.length> 0) {
      window.location.href = "/chat";
      */
});
  

});
  /*$("#click").click(function() {
    window.setInterval(check, 100);


  });

  */

/*
  $('#click').click(function() {
    var test = $("#username").val();
    $('#welcome').append(test);


  });
  */

/*
function name() {
  var test = $("#username").val();
  if(test.length > 0 && submitted == 0) {


  }
}
function check() {
  if(test  > 0)
  if($"#user".is(':visible') && submitted == 0) {
    submitted = 1;
     window.location.href = "/chat";

  }
}

*/


   


