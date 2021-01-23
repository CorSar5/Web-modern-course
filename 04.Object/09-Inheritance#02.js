//Prototype Chain
Object.prototype.attribute0 = '0' //don't do this

const grandfather = { attribute1: 'A'}
const father = {__proto__: grandfather, attribute2: 'B' }
const son = {__proto__: father, attribute3 : 'C'}
console.log(son.attribute0 , son.attribute1, son.attribute2, son.attribute3)

const car = {
    CurrentSpeed : 0,
    MaxSpeed : 200,
    Acceleration(delta){
        if (this.CurrentSpeed + delta <= this.MaxSpeed){
            this.CurrentSpeed += delta
        } else{
            this.CurrentSpeed = this.MaxSpeed
        }
    },
    status(){
        return `${this.CurrentSpeed}KM/h of ${this.MaxSpeed}KM/h`
    }
}

const ferrari  = {
    model : 'F40',
    MaxSpeed : 324, // shadowing
}

const volvo = {
    model: 'V40',
    status(){
        return `${this.model}: ${super.status()}` // use of super to refer to the status that is above in another constant
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.Acceleration(100)
console.log(volvo.status())

ferrari.Acceleration(300)
console.log(ferrari.status())