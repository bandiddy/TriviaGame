
$(document).ready(function() {

  var number = 60;
  
  var intervalId;

  var running = false;
  
  
  function run() {
    if (!running) {
      running = true;
      intervalId = setInterval(decrement, 1000);
    }
  }

  function decrement() {

    number--;

    $("#show-number").html("<h2>" + number + "</h2>");

    if (number === 0) {

      stop();

      alert("Time Up!");
    }
  }

  run();
  
  function stop() {
    running = false;
    clearInterval(intervalId);
  }
  
  var answers = [];

  function checkAnswer() {
    var correct = ["true", "true", "true", "true"];
    for (var i = 0; i < correct.length; i++) {
      if (correct[i] !== answers[i]) {
        alert('wrong answer')
      
      }
    }
     
  }
  
  
  
  
  
  
}) 

// Create an answers variable with answers as an array or object

// Create a function that when onClick, will push its 'value' (true or false) into the 'answers' array.
  // // i.e. $('#radio_button').attr("checked", "checked");

// When user submits answers, run checkAnswer().
  // checkAnswer should loop through 'correct' array at first index
  // and compare with 'answers' array at first index. 
  // if any false, return "Shit's weak"
  // if ALL true, return "Shit's still weak"
  // After each loop, increment index

  // example loop inside checkAnswer function
  // for (var i = 0; i < correct.length; i++) {
  //   if (correct[i] !== answers[i]) {
  //     return 'Wrong answers'
  //   }
  // }



