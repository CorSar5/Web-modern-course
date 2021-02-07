const sum = array => array.reduce((accumulator, current) => accumulator+ current, 0)
const average = array => sum(array)/ array.length

function bestStudent(students) {
    const medium = Object.entries(students).map(student => {
        const key = 0,
            value = 1

        return {name : student[key], average: average(student[value])}
    })
    const ordened = medium.sort((a, b) => b.average - a.average)
    const best = ordened[0]
    return best
}

console.log(bestStudent({
    John: [8, 7.6, 8.9, 6], 
    Maria: [9, 6.6, 7.9, 8], 
    Carl: [7, 7, 8, 9] 
    }))