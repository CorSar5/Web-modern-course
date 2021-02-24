// operator ... rest(get together)/spread(to spread)
//use rest as function parameter(IN Revision 2)

//use spread with object
const worker = {name: 'Marie', salarie: 1930.87 }
const clone  = {active: true, ...worker}
console.log(clone)

//use spread with array
const groupA = ['John', 'Peter', 'Emily']
const FinalGroup = ['Marie', 'Raphael', ...groupA, 'Sandra']
console.log(FinalGroup)