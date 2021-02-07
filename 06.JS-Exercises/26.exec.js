function vogals(word){
    const vogals = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]

    vogals.forEach(vogal => word = word.replace(vogal, ''))
    return word
}
//
function vogals2(word){
    return word.replace(/[aeiou]/ig, '')
}
console.log(vogals('Note'))
console.log(vogals2('Mark'))
