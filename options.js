"use strict"

var userInput = document.getElementById("userInput");
var cardId;

var CarLot = (function(originalCarLot) {


  // ---------- Changes the border and background of the clicked element ---------- //

  originalCarLot.changeBorder = function() {

    var card = event.target.closest('div');
    card.classList.toggle("fatBorder");
    cardId = card.getAttribute('id').split("--")[1];
  };

  // ---------- Changes the text of the description closest to the clicked element ---------- //
  originalCarLot.changeText = function(targetId, userInput){

    var newDescribe = document.getElementById("describe--" + targetId);

    newDescribe.innerHTML = userInput.value;
  };


  return originalCarLot;

})(CarLot || {});




