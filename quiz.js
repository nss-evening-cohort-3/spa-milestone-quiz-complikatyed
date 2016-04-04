"use strict"

function populatePage (inventory) {

  gatherStoredCarData(inventory);

  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete

 CarLot.loadInventory(populatePage);


// --------------------  Converts the JSON data from objects to arrays  -------------- //

  var gatherStoredCarData = function(storedCarsArray) {

    let inventory;

    for (var i = 0; i < storedCarsArray.length; i++) {

      let storedCar = [];

      // ----- Pushes each piece of the song data into a new 'storedSong' array ----- //
      storedCar.push(storedCarsArray[i].make);
      storedCar.push(storedCarsArray[i].model);
      storedCar.push(storedCarsArray[i].carPic);
      storedCar.push(storedCarsArray[i].year);
      storedCar.push(storedCarsArray[i].price);
      storedCar.push(storedCarsArray[i].color);
      storedCar.push(storedCarsArray[i].purchased);
      storedCar.push(storedCarsArray[i].description);

      // ----- Pushes each the new individual song array into the master song array ------ //

      inventory = CarLot.getInventory();

      inventory.push(storedCar);
    };

    buildCarCardsFromObject(inventory);
  }

// -------------------- Builds "ourCars" string based on the inventory -------------------- //

var buildCarCardsFromObject = function(myArray) {

  let ourCars = "";

    for (var i = 0; i < myArray.length; i++) {

      ourCars += "<div id='car--" + i + "' class='col-sm-4 carCard " + myArray[i][5] + "'><section class='title'>" + myArray[i][0];  // car make
      ourCars +=  " " + myArray[i][1] + "</section>";   // car model
      ourCars += "<section><img class='thumbnail' src='" + myArray[i][2] + "' alt='car image'></section>";   // car image
      ourCars += "<section>" + myArray[i][3] + "</section>";   // car year
      ourCars += "<section>$" + myArray[i][4] + "</section>";   // car price
      ourCars += "<section class='hidden'>" + myArray[i][5] + "</section>";   // car color
      ourCars += "<section class='hidden'>" + myArray[i][6] + "</section>";   // car purchased
      ourCars += "<section id='describe--" + i + "'>" + myArray[i][7] + "</section></div>";   // car description
    }

    showInventory(ourCars);
};

// -------------------- Function that adds cars to the DOM -------------------------- //


var showInventory = function(myString) {

  let parkingPlace = document.getElementById("parkingPlace");

  parkingPlace.innerHTML = myString;

};










