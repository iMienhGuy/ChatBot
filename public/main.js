
$(document).ready(function() {
//   var test = $("#username").val();

  /*
  var $str = $(".tests");

  var $arr = $str.split(" ");
  $(".tests").text("");

  for(var i = 0; i < arr.length(); i++) {
    str2 += arr[i];
  $(".tests").innerhtml(str2);
  setTimeout(300);

  

}
*/
// do ajax call and use get/post to get input value to backend
// in back end, verify if > 0 and send a response back to front end
// if error, send /400 
$("#click").click(function(e) {
  $.ajax({url: "/login", 
    method : "POST",
    data : JSON.stringify({username: $("#username").val()}),
     success: function(res){
          window.location.href = "/chat";
     }


        
  });





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


   


