/***************** Vehicle Constructor ******************
private vars: vehicle_type
private methods: makeNoise
public properties:  vehicle_type: from params
                    num_wheels: from params
                    num_passengers: from params


public methods:     addPlayer: adds a player by name to player array
                    showPrivateVariables: console.logs our private variables
on run: runs myPrivateFunction

returns: vehicle object.
*****************  END *******************/

function VehicleConstructor(vehicle_type, num_wheels, num_passengers){

  var vehicle = {};

  vehicle.vehicle_type = vehicle_type;
  vehicle.num_wheels = num_wheels || 2;
  vehicle.num_passengers = num_passengers;

  function showSelf() {
    console.log(`Product of showSelf call: ${vehicle}`);
    console.log(vehicle);
  }
  function makeNoise(noise) {
    var noise = noise || "honk, honk";
    console.log(noise);
  }
  showSelf();
  return vehicle;
}

/***********************************
                BIKE
params = (vehicle_type, num_wheels, num_passengers)
************************************/
var Bike = VehicleConstructor('bike', 2, 1);
Bike.makeNoise = function functionName(noise) {
  console.log(`The bike noise is: ${noise}`)
}
Bike.makeNoise('ring, ring')


/***********************************
                SEDAN
params = (vehicle_type, num_wheels, num_passengers)
************************************/
var Sedan = VehicleConstructor('sedan', 2, 1);
Sedan.makeNoise = function(noise) {
  console.log(`The sedan noise is: ${noise}`)
}
Sedan.makeNoise('Honk, Honk')


/***********************************
                BUS
params = (vehicle_type, num_wheels, num_passengers)
************************************/
var Bus = VehicleConstructor('bus', 2, 0);
Bus.passenger_pickUp = function (num_passengers_toPickup=1) {
  Bus.num_passengers += num_passengers_toPickup
  console.log(`The bus now has: ${Bus.num_passengers}`)
}
Bus.passenger_pickUp(10)
Bus.passenger_pickUp()
