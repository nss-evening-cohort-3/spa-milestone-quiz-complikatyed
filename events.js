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

    var card = event.target.closest('div');
        cardId = card.getAttribute('id').split("--")[1];

    CarLot.enlargeBorder(card, "lightSteelBlue");
    userInput.focus();

    // ------- Event Listener for input in the text area --------------- //
    userInput.addEventListener("keyup", function() {
      // --- Calls the 'changeText' function (from 'options.js' iife) --- //
      CarLot.changeText(cardId, userInput);
    });

    // ------- Event Listener for press of 'Enter' key --------------- //

    userInput.addEventListener("keypress", function(e) {
      if (e.keyCode === 13) {
        // --- Calls the 'shrinkBorder' function (from 'options.js' iife) --- //
        CarLot.shrinkBorder(card, "lightSteelBlue");
        // --- Removes focus from the input box --- //
        userInput.blur();
        // --- Resets the input box value to blank --- //
        userInput.value = "";
      }
     });

  };

  return originalCarLot;

})( CarLot || {} );





