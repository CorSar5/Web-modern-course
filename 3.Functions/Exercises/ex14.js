function fruit(piece){
    switch(piece){
        case 'Apple':
            return "We don't sell that fruit here"
        case 'Kiwi':
            return "We have a small stock of Kiwis!"
        case 'Watermelon':
            return "Here they are, 1$ per kilo!"
        default:
            return "ERROR"
    }
}

console.log(fruit('Apple'))
console.log(fruit('Kiwi'))
console.log(fruit('Watermelon'))
console.log(fruit('Fruit'))