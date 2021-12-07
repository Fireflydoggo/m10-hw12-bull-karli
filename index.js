// YOUR CODE HERE
//Your assignment is to create a class named Car in JavaScript. This class will create objects that have three properties:
class Car {
  constructor(make, model, year) {
      this.make = make
      this.model = model
      this.year = year
  }

//Your class should also have the following methods:
  honk() {
      console.log('BEEP BEEP!')
  }
  
}

function performMaintenance() {
  console.log('maintenance complete')
}

setTimeout(function() {
  console.log('maintenance complete')
}, 3000);

//Create a variable named mySweetRide and assign it a car created with your class using the following arguments:
var mySweetRide = new Car('Pontiac', 'Fiero', 1988) 

//call mySweetRide's honk method once
mySweetRide.honk()
//call mySweetRide's performMaintenance method once
mySweetRide.performMaintenance()

