// 1. Car Class Constructor:

class Car{
    constructor(make,speed){
        this.make=make
        this.speed=speed
    }       
    // 2. Accelerate Method:
    accelerate(){
        this.speed = (this.speed + 10)  // Adding 10 km/h
        console.log("You are now driving at " + this.speed + "km/h."
        );
    }
    // 3. Brake Method:
    brake(){
        this.speed = (this.speed - 5)  // Subtracting 5 km/h
        console.log("You are now driving at " + this.speed + "km/h."
        );
    }
}