$(document).ready(function() {

  function writeMessage(msg) {
    $('#output').append(msg + '<br>');
  }

  function collectInfo() {
    var num = prompt("Enter 1-100");
    num = +num; //the "+" operator converts string to integer
    //math.floor rounds decimal # down but if it's inside if block with (num) 
    //and they do not equate to eachother, it renders false, making it go to collectInfo prompt again
    if(Math.floor(num) == num && num > 0 && num < 101) {
      fizzbuzz(num);
    } 
    else {
      collectInfo()
    }
  }
  collectInfo()

  function fizzbuzz(n) {
    for(i = 1; i <= n; i++) {
      if(i % 15 == 0) {
    	  writeMessage("FizzBuzz");
      }
      else if(i % 5 == 0) {
    	  writeMessage("Buzz");
      }
      else if(i % 3 == 0) {
    	  writeMessage("Fizz")
      }
      else {
        writeMessage(i);
      }
    }
  };
});
