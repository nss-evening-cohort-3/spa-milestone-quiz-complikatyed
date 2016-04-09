"use strict";


var CarLot = (function(originalCarLot) {


  // ---------- Changes the border and background of the clicked element ------------------ //

  originalCarLot.enlargeBorder = function(card, color ) {

    card.classList.add("fatBorder");
    card.classList.add(color);

  };

  originalCarLot.shrinkBorder = function(card, color ) {

    card.classList.remove("fatBorder");
    card.classList.remove(color);

  };

  // ---------- Changes the text of the description closest to the clicked element ---------- //
  originalCarLot.changeText = function(targetId, userInput){

      var newDescribe = document.getElementById("describe--" + targetId);
        newDescribe.innerHTML = userInput.value;
  };

  return originalCarLot;

})(CarLot || {});




