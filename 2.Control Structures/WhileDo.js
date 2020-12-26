function getRandomInt(min, max) {
    const value = Math.random() * (max- min) + min
    return Math.floor(value)
}

let option = -1

do {
    option = getRandomInt(-1, 10)
    console.log(`Chosen option was: ${option}`)
} while (option != -1)

console.log('Bye!')

// The differences between the commands While and Do/While are small, the most important thing to remember is: if your variant won't run on yout While Command with do it will always work and when it comes to the false exemple again it breaks the loop