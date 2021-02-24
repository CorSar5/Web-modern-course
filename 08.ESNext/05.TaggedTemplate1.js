// Tagged Templates - processes the template in a function
function tag(parts, ...values){
    console.log(parts)
    console.log(values)
    return 'Another String'
}

const student = 'Peter'
const situation = 'Approved'
console.log(tag `${student} is ${situation}.`)