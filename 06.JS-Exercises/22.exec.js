function lucky(number){
    const luckyNumber = Math.floor((Math.random() * 10) + 1)
    if (number === luckyNumber)
        return `Congratulations! The sorted number was ${luckyNumber}!`
    else  return `What a pity! The sorted number was ${luckyNumber}!`
}

console.log(lucky(2))
console.log(lucky(3))