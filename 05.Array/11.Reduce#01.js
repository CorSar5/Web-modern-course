const stundents = [
    { name: 'John', mark: 7.3, scholarship: false},
    { name: 'Marie', mark: 9.2, scholarship:true},
    { name: 'Peter', mark: 9.8, scholarship : true},
    { name: 'Anne', mark: 8.7, scholarship: true}
]

console.log(stundents.map(a=>a.mark))
const result = stundents.map(a => a.mark).reduce(function(accumulat, curr) {
    console.log(accumulat, curr)
    return accumulat + curr 
},0)

console.log(result)