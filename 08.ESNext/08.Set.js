//does not accept repetition/ not indexed
const teams = new Set()
teams.add('Bayern Munich')
teams.add('PSG').add('AC Milan').add('Manchester City')
teams.add('Manchester United')
teams.add('PSG')//Repeated one* it will be ignored

console.log(teams)
console.log(teams.size)
console.log(teams.has('psg'))
console.log(teams.has('PSG'))
teams.delete('AC Milan')
console.log(teams.has('AC Milan'))

const names = ['Rachel', 'Peter', 'John', 'Peter']
const namesSet = new Set(names)
console.log(namesSet)