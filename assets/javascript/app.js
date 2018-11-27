
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
      var userAnswers = [];
    // Loops through all checked input fields
    $('input[name="pokemon"]:checked').each(function() {
      // DONE - 1. Get the 'value' of the checked radio button
      // DONE - 2. Push that 'value' to the userAnswers array
      userAnswers.push($(this).val())
      
    })
    // DONE - 3. Then checkAnswer(userAnswers) function
    checkAnswer(userAnswers)
      alert("Time Up!"); 
    }
  }

  function stop() {
    running = false;
    clearInterval(intervalId);
    
  }
 

  function checkAnswer(userAnswers) {
    var correctAnswers = ["true", "true", "true", "true"];

    for (var i = 0; i < correctAnswers.length; i++) {
      // if at any time the correctAnswer and userAnswer does
      // not match up, exit function here
      if (correctAnswers[i] !== userAnswers[i]) {
        alert('You got at least 1 wrong!?')
        return;
      }
    }
    
    // otherwise exit function here
    alert('all correct. YOURE A POKEMON MASTER!!?')
    return;
  }
  
  $('.submit-answers').click(function() {
    var userAnswers = [];
    // Loops through all checked input fields
    $('input[name="pokemon"]:checked').each(function() {
      // DONE - 1. Get the 'value' of the checked radio button
      // DONE - 2. Push that 'value' to the userAnswers array
      userAnswers.push($(this).val())
      
    })
    // DONE - 3. Then checkAnswer(userAnswers) function
    checkAnswer(userAnswers)
    stop();
  })

  run();
})
