for ( let leter of "word") {
    console.log(leter)
}

const ECMA = ['Map', 'Set', 'Promise']

for (let i in ECMA){ //it will run the indexes (in)
    console.log(i)
}

for (let i of ECMA){
    console.log(i)
}

const MapRelated = new Map ([
    ['Map', {approached: true}],
    ['Set', {approached: true}],
    ['Promise', {approached: false}]
])

for (let subject of MapRelated){
    console.log(subject)
}

for (let key of MapRelated.keys()){
    console.log(key)
}

for (let value of MapRelated.values()){
    console.log(value)
}

for (let [keys, values] of MapRelated.entries()) {
    console.log(keys, values)
}

const s = new Set(['a', 'b', 'c'])
for (let leter of s){
    console.log(leter)
}