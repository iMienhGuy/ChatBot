
$(document).ready(function() {
  var $chatlog = $(".chatLog");


// when I click submit after enter text in chat.html,
// post it to db to store it. then grab it and 
// append divs inside  bigChatBot. clear text after press enter
$("#submit").click(function() {
  var text = $("#comment").val();
    $chatlog.append("<div class = 'lol'>  </div>");
    $chatlog.children().last().html(text);
    $("#comment").val("");

});






// do ajax call and use post verify if username > 0 to get input value to backend
// send the data to server  and let it handle post call,
// if successful, will reroute the page to chat.html
$("#user").submit(function(e) {
  e.preventDefault();
  var name = {username : $("#username").val()};
  $.ajax({url: 'http://localhost:1337/login', 
    type : 'POST',
    data: name,
     success: function(res){
       window.location.href = "/chat";
       
       console.log("success!", res);
     }
       
  });

 
});


//sends a get request so that the server can grab the data from /login route
// which contains the username 
// store the response from the get request and then output it to chat.html for users to see
 $.ajax({url: 'http://localhost:1337/login', 
    type : 'GET',
     success: function(res){
      var x = res;
        $(".welcome").text("Welcome, " + x);
       console.log("success!", res);
     }
       
  });
     
});
  
  /*
Attempts to scroll the chatlog to the bottom when text filled up

  $(".bigChatBox").animate({
        scrollTop: $(".bigChatBox")[0].scrollHeight}, 2000);
*/


  


   


