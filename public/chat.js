
$(document).ready(function() {
    var $chatlog = $(".chatLog");
    var letter;
     

/*chatlog.animate({
        scrollTop: chatlog[0].scrollHeight}, 2000);*/

//sends a get request so that the server can grab the data from /login route
// which contains the username 
// store the response from the get request and then output it to chat.html for users to see
 $.ajax({url: 'http://localhost:1337/login', 
    type : 'GET',
     success: function(res){

      var x = res;
      letter = x[0];
        $(".welcome").text("Welcome, " + x);
       console.log("success!", res);
     }
       
  });

 /*$.ajax({url: 'http://localhost:1337/chat', 
    type : 'GET',
     success: function(res){
        for(var i = 0; i < res.length; i++) {
            $chatlog.append("<div wordwrap >  </div>");
      $chatlog.children().last().text(letter + ": " + res[i]);
        }
     
     }
       
  });
  */


// when I click submit after enter text in chat.html,
// post it to db to store it. then grab it and 
// append divs inside  bigChatBot. clear text after press enter
$("#submit").click(function() {
  var text = $("#comment").val();
  dostuff(text);
  $.ajax({url: 'http://localhost:1337/chat', 
    type : 'POST',
    data: {log: text},
     success: function(res){
       
       console.log("success!", res);
     }
       
  });
   $.ajax({url: 'http://localhost:1337/chat', 
    type : 'GET',
     success: function(res){
       
       console.log("success!", res);
     }
       
  });
   

});
function dostuff(text) {
   if(text == 'clear') {
      $chatlog.children().remove();
      $("#comment").val("");
    }
    
    else {
      $chatlog.append("<div wordwrap >  </div>");
      $chatlog.children().last().text(letter + ": " + text);
      $("#comment").val("");
  }

}

// checks if user press enters, allows chatlog to populate
//e.preventdefault makes it so won't move to new line after press enter
// make include when text area selected and enter??
// can i somehow combine this with #submit click function????

  window.onkeydown = function(e) {

  if(e.keyCode == 13) {
    var text = $("#comment").val();
    e.preventDefault();
    dostuff(text);
      $.ajax({url: 'http://localhost:1337/chat', 
    type : 'POST',
    data: {log: text},
     success: function(res){
       
       console.log("success!", res);
     }
       
  });

  }
}


});

  
  /*
Attempts to scroll the chatlog to the bottom when text filled up

  $(".bigChatBox").animate({
        scrollTop: $(".bigChatBox")[0].scrollHeight}, 2000);
*/





  


   


