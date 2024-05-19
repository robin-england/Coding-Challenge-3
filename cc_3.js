// 1. Car Class Constructor:
class Car{
    constructor(make,speed){
        this.make=make
        this.speed=speed
    }       
    // 2. Accelerate Method:
    accelerate(){
        this.speed = (this.speed + 10)  // Adding 10 km/h
        console.log("We are accelerating! We are now driving at " + this.speed + "km/h.")
    }
    // 3. Brake Method:
    brake(){
        this.speed = (this.speed - 5)  // Subtracting 5 km/h
        console.log("We are slowing down! We are now driving at " + this.speed + "km/h.")
    }
}
// 4. Create and Test Car Objects:
let car1 = new Car ("BMW", 120)
let car2 = new Car ("Mercedes", 95)

car1.accelerate()   // Testing accelerate and brake methods for BMW
car1.brake()
car1.accelerate()
car1.brake()
car1.brake()
console.log(car1)   // Displaying final speed for BMW. Final speed should be 125km/h.

car2.accelerate()   // Performing tests for Mercedes
car2.accelerate()
car2.brake()
car2.accelerate()
car2.brake()
console.log(car2)   // Displaying final speed for Mercedes. Final speed should be 115km/h.