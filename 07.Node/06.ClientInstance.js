const counterA = require('./06.UniqueInstance')
const counterB = require('./06.UniqueInstance')

const counterC = require('./06.NewInstance')()
const counterD = require('./06.NewInstance')()

counterA.inc()
counterA.inc()
console.log(counterA.value, counterB.value)

counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)