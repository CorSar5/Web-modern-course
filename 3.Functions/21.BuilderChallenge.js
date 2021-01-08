function Person(name){
    this.name = name
    this.pname = function()
    {
        console.log(`My name's ${this.name}!!!`)
    }
}

const p3 = new Person('John')
p3.pname()

