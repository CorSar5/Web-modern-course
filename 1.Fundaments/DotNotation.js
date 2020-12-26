console.log(typeof console)// it's an object
console.log(Math.ceil(6.1))

const objt1 = {}
objt1.name = 'Ball'
//objt1['name'] = 'Ball2' //equal to the 5th line of code, if the comment is taken of name = Ball2
console.log(objt1.name)

function Objt(name) {
    this.name = name //using 'this' the property makes the function out of it
    this.exec = function(){
        console.log('Exec...')
    }
}
const obj2 = new Objt('Chair')
const obj3 = new Objt('Desk')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()
//Dot is used to access the Attributes