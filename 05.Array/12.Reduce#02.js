const stundents = [
    { name: 'John', mark: 7.3, scholarship: false},
    { name: 'Marie', mark: 9.2, scholarship:true},
    { name: 'Peter', mark: 9.8, scholarship : false},
    { name: 'Anne', mark: 8.7, scholarship: true}
]

//Challenge 1: Do all students have scholarships
const results1 = (result, scholarship) => result && scholarship
console.log(stundents.map(a =>a.scholarship).reduce(results1))

/*Challenge 2: Is there any students who have a scholarship */

const results2 = (result, scholarship) => result || scholarship
console.log(stundents.map(a => a.scholarship).reduce(results2))