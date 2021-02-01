const students = [
    {name:'John', mark: 7.9},
    {name:'Marie', mark:9.2},
]

//Imperative
let total1 = 0
for(let i = 0; i< students.length; i++){
    total1 += students[i].mark
}
console.log(total1/ students.length)

//Declarative
const getMark = student => student.mark
const sum = (total, current) => total + current

const total2 = students.map(getMark).reduce(sum)
console.log(total2/students.length) // it is more important

//select code, name, e-mail from clients where active = 1 -SQL declarative language