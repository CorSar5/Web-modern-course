function inversion(object) {
    const pairs = Object.entries(object).map( pair => pair.reverse())
    return Object.fromEntries(pairs)
}
//
function inversion2(object) {
    const InvertedObject = {}
    Object.entries(object).forEach(pair => {
        const key =0,
            value = 1
        InvertedObject[pair[value]] = pair[key]
    });
    return InvertedObject
}


console.log(inversion({ a: 1, b: 2, c: 3}))
console.log(inversion2({ a: 1, b: 2, c: 3}))