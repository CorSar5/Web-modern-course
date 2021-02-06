function characterCounter(character, string){
    let characters = string.toLowerCase().split('')
    character = character.toLowerCase()
    let number = 0
    for( item in characters){
        if (characters[item] == character)
            number ++
    }return number
}
//
function characterCounter2(character, string){
    let number = 0
    for (let i = 0; i < string.length; i++)
        if (string.charAt(i) === character)
            number++
    return number
}
//
function  characterCounter3(character, string){
    return [...string].filter(characters => characters === character).length
}

console.log(characterCounter('C', 'Came here to take my cat'))
console.log(characterCounter2('c', 'Came here to take my cat'))
console.log(characterCounter3('c', 'Came here to take my cat'))