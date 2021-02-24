// Tagged Templates - processes the template in a function
function tag(parts, ...values){
    console.log(parts)// will have indexes like 0, 2, 4
    console.log(values)// will have indexes like 1, 3, 5
    return 'Another String'
}

const student = 'Peter'
const situation = 'Approved'
console.log(tag `${student} is ${situation}.`)//Will only return 'Another String'