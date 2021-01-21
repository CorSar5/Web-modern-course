//using literal notation
const obj1 = {}
console.log(obj1)

//Obejct in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Constructure Functions
function Product(name, price, discount){
    this.name = name
    this.getPricewithDiscount = () => {
        return price * (1 - discount)
    }
}

const p1 = new Product('Pen', 5.99, 0.15)
const p2 = new Product('Notebook', 599.99, 0.35)
console.log(p1.getPricewithDiscount(), p2.getPricewithDiscount())

//Factory Function
function createEmployee(name, salary, falts) {
    return{
        name,
        salary,
        falts,
        getSalary(){
            return (salary/30) * (30-falts) 
        }
    }
}
const w1 = createEmployee('John', 700, 1)
const w2 = createEmployee('Marie', 800, 5)
console.log(w1.getSalary(), w2.getSalary())

//Obeject.create
const daughter = Object.create(null)
daughter.name = 'Emily'
console.log(daughter)

// Famous Function that returns Object...
const fromJSON = JSON.parse('{"info": "I am a JSON"}')
console.log(fromJSON.info)