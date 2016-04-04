var CarLot = (function () {

  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },

    loadInventory: function (callback) {

      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.open("GET", "inventory.json");

      inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
        var allCars = JSON.parse(this.responseText);
        callback(allCars.cars);
      });
    }
  };

})();
