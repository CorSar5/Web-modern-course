const marks = [7.7, 6.5, 5.2 , 8.9 , 3.6 , 7.1 , 9.0]

//Without CallBack
const lowMarks1 = []
for(let i in marks){
    if (marks[i]<7){
        lowMarks1.push(marks[i])
    }
}

console.log(lowMarks1)

//With Callback
const lowMarks2 = marks.filter(function (mark){
    return mark < 7
})

console.log(lowMarks2)

const marksUnder7 = mark=> mark<7
const lowMarks3 = marks.filter(marksUnder7)
console.log(lowMarks3)