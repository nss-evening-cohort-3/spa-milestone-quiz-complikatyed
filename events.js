"use strict";

var cardId;
var userInput = document.getElementById("userInput");
var clickedThings = document.getElementsByClassName("clicked");

var CarLot = (function(originalCarLot) {

  // ------ Looks for clicked cards and disables input box  -------------- //

  originalCarLot.guardUserInputBox = function(clickedThings) {
    // --- If there aren't any car cards clicked, the text box won't work --- //
     if (clickedThings.length == 0) {
      userInput.disabled = true;
     }
     else {
      // --- otherwise, make the text box work again ------------------------ //
      userInput.disabled = false;
     }
  };

  originalCarLot.activateEvents = function() {
    // --- Sets up the guard so the user can't click in the text box ------------ //
    CarLot.guardUserInputBox(clickedThings);

    let cardListener = document.getElementsByClassName("carCard");

    for (let i = 0; i < cardListener.length; i++) {
      let cardThing = cardListener[i];

      // --- Adds an event listener to each card (after they've been added to DOM) --- //
      // --- When a card is clicked, the 'addClickedClass' (from below) is called ---- //
      cardThing.addEventListener("click", CarLot.addClickedClass);

    };

  };

  originalCarLot.addClickedClass = function() {

    var card   = event.target.closest('div');
        cardId = card.getAttribute('id').split("--")[1];

    if (clickedThings.length !== 0) {

      // --- removes the focused styling from any previously clicked elements --- //
      CarLot.shrinkBorder(clickedThings[0], "SkyBlue");

      // --- Looks for the first element in the 'clickedThings' array... -------- //
      // --- (essentially, anything that is marked as clicked) and removes ------ //
      // --- the 'clicked' class from that element, since only one element ------ //
      // --- should be marked as 'clicked' at once. This allows the newly  ------ //
      // --- clicked card to have 'clicked' class added on the following line --- //

      clickedThings[0].classList.remove("clicked");
      userInput.value = "";
      card.classList.add("clicked");
    }
    else {
      // --- If there's nothing else clicked, add 'clicked' class to this element --- //
      card.classList.add("clicked");
    };

    CarLot.showFocus(card);
  };


// ------------ Takes away the 'clicked' class (gets called below) ------------------ //
  originalCarLot.removeClickedClass = function(card) {
    card.classList.remove("clicked");
  };

// ------------ Holds event listeners & calls action functions for clicked cards --- //
  originalCarLot.showFocus = function(card, color) {

    // --- Checks for clicked elements and guards the text input area -------------- //
    CarLot.guardUserInputBox(clickedThings);
    // --- Changes the border and background to show which card is clicked --------- //
    CarLot.enlargeBorder(card, "SkyBlue");
    // --- Moves focus (cursor) to the text input area ----------------------------- //
    userInput.focus();

    // ------- Event Listener for input in the text area ---------------------- //
    userInput.addEventListener("keyup", function() {

      // --- Calls the 'changeText' function (from 'options.js' iife) --------- //
      CarLot.changeText(cardId, userInput);
    });


    // ------- Event Listener for press of 'Enter' key ----------------------- //

    userInput.addEventListener("keypress", function(e) {
      if (e.keyCode === 13) {

        // --- Calls the 'shrinkBorder' function (from 'options.js' iife) ------- //
        // --- so it's clear that this card is no longer the focus of action ---- //
        CarLot.shrinkBorder(card, "SkyBlue");

        // --- Calls the 'removeClickedClass' function (from above) ------------- //
        // --- (to make the card "officially" no longer clicked) ---------------- //
        CarLot.removeClickedClass(card);

        // --- These functions remove focus from the input box and puts guard --- //
        // --- on the text box so it can't be used unless a card is clicked   --- //
        CarLot.guardUserInputBox(clickedThings);
        userInput.blur();

        // --- Clears the text input area so it's ready for the next use ------- //
        userInput.value = "";
      }
     });

  };

  return originalCarLot;

})( CarLot || {} );





