class Person {
    constructor(name){
        this.name = name
    }

    speak(){
        console.log(`My name's ${this.name}!`)
    }
}

const p1 = new Person('Jeff')
p1.speak()

const cperson = name => {
    return{
        speak: () => console.log(`My name's ${name}`)
    }
}

const p2 = cperson('Lorenzo!!')
p2.speak()

//WARNING: In the web usage factory function is way more helpful, in the example as it shows the function didn't need the command 'this'. On the other side the class needed it so in Browser terms, Classes in this examples won't be helpful but give us an undefined name ! *In the case you're usind Document.getElementsByTagName('body')[0].onclick