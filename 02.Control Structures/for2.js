const marks=[6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in  marks){ // the denomination LET is very important so you can't use your variables outside the loop
    console.log(i, marks[i])
}

const person = {
    name: 'Anne',
    surname: 'Roonie',
    age: 22,
    weight: 60
}

for(let attribute in person){
    console.log(`${attribute} = ${person[attribute]}`)
}