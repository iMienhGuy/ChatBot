
$(document).ready(function() {
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

     
});