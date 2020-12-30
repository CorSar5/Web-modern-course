const person = {
    greeting: 'Hello!',
    speak() {
        console.log(this.greeting)
    }
}

person.speak()
const speak = person.speak
speak() //undefined, problem between paradigms: functional and 00

const speakfromPerson = person.speak.bind(person)
speakfromPerson()