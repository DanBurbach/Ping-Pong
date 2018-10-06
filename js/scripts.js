// NOTE: business logic start
function pingpong(num) {
  var numberArray = [];
  debugger
  for(var i = 1; i <= num; i++) {
    if ((i % 15) === 0) {
      numberArray.push("ping-pong");
    } else if ((i % 5) === 0) {
      numberArray.push("pong");
    } else if (( i % 3) === 0) {
      numberArray.push("ping");
    } else {
      numberArray.push(i);
    }
  };
  debugger
  return numberArray;
  console.log(numberArray)
}
// NOTE: business logic end
//-----------------------------------------------------
// NOTE: user-interface logic start
$(document).ready(function() {
  $(".submitButton").click(function(event) {
    event.preventDefault();
    $("#uList").empty();
    var input = parseInt($('#userInput').val());
    numberArray = pingpong(input);
    for(var i = 0; i < numberArray.lenth; i++){
      $("#uList").append("<li>" + numberArray[i] + "</li>");
    }
  });
});
// NOTE: user-interface logic end
