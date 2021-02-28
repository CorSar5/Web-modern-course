const firstElement= array=>array[0]
const firstLeter = string => string[0]
const lower = lower => lower.toLowerCase()

let p = new Promise(function(resolve){
    resolve(['Anne', 'Mark', 'Eddie', 'Daniels']) 
})

p
    //.then(value=>console.log(value)) this was an interesting fact, if you print the value after you can't take anything from it.
    .then(value => value[0])//passes to the next, and so and so...
    .then(value => value[0])
    .then(leter => leter.toLowerCase())
    .then(lowerCase => console.log(lowerCase))

//or
p
    .then(firstElement)
    .then(firstLeter)
    .then(lower)
    .then(console.log)