function VehicleConstructor(name, wheels, passengerNumber,speed){
  //backup in case someone forgets to type the NEW constructor.
  if (!(this instanceof VehicleConstructor)){
    return new VehicleConstructor(name,wheels,passengerNumber, speed);
  }
  // Variable string of characters used to generate the random vin number
  var chars = "0123456789ABCEDGHIJKLMNOPQRSTUVWXYZ";

  this.distanceTraveled = 0;
  this.speed = speed;
  // using the OR operator to set a default value if none is passed.
  this.name = name || "unicycle";
  this.wheels = wheels || 1;
  this.passengerNumber = passengerNumber || 0;
  // Invoke createVin to generate random vin number
  this.vin = createVin();

  function createVin(){
    var vin = '';
    for (var i = 0; i < 17; i+=1 ){
      // Expression returns a random # to use as index value for VIN.  Process is repeated 17 times.
      vin += chars[Math.floor(Math.random()*35)];
    }
    return vin;
  }

}
// functions from the previous build are now prototypes OUTSIDE of the constructor.
VehicleConstructor.prototype.makeNoise = function(noise){
  var noise = noise || "Honk Honk";
  console.log(noise);
  return this;
};

VehicleConstructor.prototype.move = function(){
  this.makeNoise();
  this.updateDistanceTraveled();
  //returning 'this' allows chaining of methods.
  return this;
};

VehicleConstructor.prototype.checkMiles = function(){
  console.log(this.distanceTraveled);
  return this;
};

VehicleConstructor.prototype.updateDistanceTraveled = function(){
  this.distanceTraveled += this.speed;
  console.log(`The ${this.name} has moved ${this.distanceTraveled} miles`);
  return this;
}

VehicleConstructor.prototype.specs = function() {
  console.log(`This is a ${this.name}.  It's seating capacity is: ${this.passengerNumber}. The ${this.name} has ${this.wheels} wheels.`);
}

// create NEW car using constructor
var car = new VehicleConstructor('car', 4, 4, 80);

//create new VehicleConstructor(name, wheels, passengerNumber,speed)
scooter = new VehicleConstructor('scooter', 2, 1, 30)
console.log(scooter.vin);
console.log(scooter.vin.length);
var semi = new VehicleConstructor('semi', 18, 4, 100)
console.log(semi);
semi.move()
console.log(semi);
console.log("**************************************************");
scooter.checkMiles();
console.log("**************************************************");
scooter.move();
console.log("**************************************************");
scooter.checkMiles();
console.log("**************************************************");
semi.move().move();
console.log("**************************************************");
semi.specs();
console.log("**************************************************");
semi.move().checkMiles().specs();
console.log("**************************************************");
