//const Person = require('./person')
import Person from './person'
//import './modules/moduleA' without this line the console.log() won't run
import './assets'

const clerk = new Person
console.log(clerk.greetings())