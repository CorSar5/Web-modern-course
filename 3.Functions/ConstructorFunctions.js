function Car(maxspeed = 200, delta = 5){
    // private attribute
    let CurrentSpeed = 0

    //public method
    this.accelerate = function(){
        if (CurrentSpeed + delta <= maxspeed){
            CurrentSpeed += delta
        }else {
            CurrentSpeed = maxspeed
        }
    }

    //public method
    this.getCurrentSpeed = function(){
        return CurrentSpeed
    }
}

const uno = new Car
uno.accelerate()
console.log(uno.getCurrentSpeed())

const ferrari = new Car(350, 20)
ferrari.accelerate()
ferrari.accelerate()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)
