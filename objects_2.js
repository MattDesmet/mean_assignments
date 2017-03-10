/* Vehicle Constructor declares an initial variable, vehicle as an object.
  public properties that can be set:
    name, wheels, passengersNumber
  public method:
    makeNoise
  returns vehicle.
*/

/***************************************************
 Have the Vehicle constructor also take in a “speed” Store the speed as an attribute
 Create a private variable called distance_travelled that starts at 0
 Create a private method called updateDistanceTravelled that increments distance traveled by speed
 Add a method to the Vehicle called “move” that calls updateDistanceTravelled and then makeNoise
 Add a method called checkMiles that console.logs the distance_travelled
****************************************************/
function VehicleConstructor(name, wheels, passengerNumber, speed) {
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name, wheels, passengerNumber, speed);
  }
  /* Privates */
  var distanceTraveled = 0;
  var self = this;
  function updateDistanceTraveled() {
    distanceTraveled += self.speed;
    console.log(distanceTraveled);
  }
  /* public */
  this.speed = speed;
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;
  // METHODS
  this.makeNoise = function(noise){
    var noise = noise || "Honk Honk";
    console.log(noise)
  }
  this.move = function () {
    this.makeNoise();
    updateDistanceTraveled();
  }
  this.checkMiles = function() {
    console.log(`${this.name} has traveled this many miles: ${distanceTraveled}`);
  }
}

var car = new VehicleConstructor('car', 4, 6, 70);
console.log(car);

// no NEW keyword but it code added it and it still functions.
var noNewCar = VehicleConstructor('car', 6, 7, 100);
console.log(noNewCar);

car.checkMiles();
