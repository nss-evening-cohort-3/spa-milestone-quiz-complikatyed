"use strict"

var userInput = document.getElementById("userInput");
var cardId;

var CarLot = (function(originalCarLot) {


  // ---------- Changes the border and background of the clicked element ------------------ //

  originalCarLot.enlargeBorder = function(card, color ) {

  // ----- refactor to let this take a DOM element (called 'card' here) and a color ------ //
    console.log("changeBorder called");
    console.log(card);
    card.classList.add("fatBorder");

  };

  originalCarLot.shrinkBorder = function(card, color ) {

  // ----- refactor to let this take a DOM element (called 'card' here) and a color ------ //
    console.log("changeBorder called");
    console.log(card);
    card.classList.remove("fatBorder");

  };

  // ---------- Changes the text of the description closest to the clicked element ---------- //
  originalCarLot.changeText = function(targetId, userInput){

    var newDescribe = document.getElementById("describe--" + targetId);

    newDescribe.innerHTML = userInput.value;
  };


  return originalCarLot;

})(CarLot || {});




