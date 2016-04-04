// should augment originalCarLot with two more functions.
// 1st resets the border thickness & background color for each car element back to original values. 
// 2nd changes the thickness of the border of a car element, and changes its background color.
// The 2nd function must accept two arguments: clicked on car DOM element & color name

"use strict"

var userInput = document.getElementById("userInput");
var cardId;

var CarLot = (function(originalCarLot) {

  // originalCarLot.changeBorder = function() {
  //   var card = event.target.closest('div');
  //   card.classList.toggle("fatBorder");
  //   cardId = card.getAttribute('id').split("--")[1];
  // };

  // originalCarLot.changeText = function(targetId, userInput){

  //   var newDescribe = document.getElementById("describe--" + targetId);

  //   newDescribe.innerHTML = userInput.value;
  // };


  return originalCarLot;

})(CarLot || {});




