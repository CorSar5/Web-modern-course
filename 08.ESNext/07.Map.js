const technologies = new Map()
technologies.set('react', {framework: false})
technologies.set('angular', {framework: true})

console.log(technologies.react)
console.log(technologies.get('react').framework)

const RandomKeys = new Map([[function() { },'Function'],
    [{}, 'Object'],
    [123, 'Number']])

RandomKeys.forEach((value, key)=> {
    console.log(key, value)
})

console.log(RandomKeys.has(123))
RandomKeys.delete(123)
console.log(RandomKeys.has(123))
console.log(RandomKeys.size)

RandomKeys.set(123, 'a')
RandomKeys.set(123, 'b') //We can't have the same keys, can be used to username creation
RandomKeys.set(456, 'b') //Although the same value is possible
console.log(RandomKeys)