const daughters = ['Waleskah', 'Cibalena']
const sons = ['Voxiton', 'Uesclei']
const all = daughters.concat(sons, 'Petersen')
console.log(all, daughters, sons)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
//It will always create a new array 