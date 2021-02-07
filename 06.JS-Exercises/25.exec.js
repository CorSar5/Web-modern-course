function similarWords(word, array){
    return array.filter( words => words.includes(word))
}
//
function similarWords2(word,array){
    const result = []
    for (let words of array){
        if ( words.includes(word)){
            result.push(words)
        }
    }return result
}

console.log(similarWords("pro", ["programação", "mobile", "profissional"]))
console.log(similarWords2("python", ["javascript", "java", "c++"]))