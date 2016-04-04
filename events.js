'use strict'

var cardId;
var userInput = document.getElementById("userInput");

var CarLot = (function(originalCarLot) {

  originalCarLot.activateEvents = function() {

    let cardListener = document.getElementsByClassName("carCard");

    for (let i = 0; i < cardListener.length; i++) {
       let cardThing = cardListener[i];

       cardThing.addEventListener("click", CarLot.youClickedMe);
    };
  };

  originalCarLot.youClickedMe = function() {

    CarLot.changeBorder();
    userInput.focus();

    // ------- Event Listener for input in the text area --------------- //
    userInput.addEventListener("keyup", function() {

      CarLot.changeText(cardId, userInput);
    });

    // ------- Event Listener for press of 'Enter' key --------------- //

    userInput.addEventListener("keypress", function(e) {
      if (e.keyCode === 13) {
        // Takes the focus AWAY from the text box
        userInput.blur();
        // Resets the input box value to blank
        userInput.value = "";
      }
     });

  };

  return originalCarLot;

})( CarLot || {} );





