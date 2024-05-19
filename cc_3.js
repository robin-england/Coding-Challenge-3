// 1. Car Class Constructor:

class Car{
    constructor(make,speed){
        this.make=make
        this.speed=speed
    }
    accelerate(){
        this.speed = (this.speed + 10)
        console.log("You are now driving at " + this.speed + "km/h."
        );
    }
}