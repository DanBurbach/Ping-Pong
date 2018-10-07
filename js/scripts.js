function gameLoop(num) {
  var resultArray = [];
  for (var i = 1; i <= num; i++) {
    if ((i % 15) === 0){
      resultArray.push('pingpong');
    } else if((i % 5) === 0) {
      resultArray.push('pong');
    } else if((i % 3) === 0) {
      resultArray.push('ping');
    } else {
      resultArray.push(i);
    }
  }
  return resultArray;
}
// User Logic
$(document).ready(function(){
  $('.submitButton').click(function(event){
    $('#uList').empty();
    var input = parseInt($('#userInput').val());
    resultArray = gameLoop(input);
    for(var i = 0; i < resultArray.length; i++){
      $('#uList').append('<li>' + resultArray[i] + '</li>');
    event.preventDefault();
    }
  });
});
