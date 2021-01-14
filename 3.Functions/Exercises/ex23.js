function calc(code, mark1, mark2, mark3) {
    let marks = []
    marks.push(mark1)
    marks.push(mark2)
    marks.push(mark3)
    marks.sort((a, b)=> a< b ? 1 : -1)

    let final = (marks[0] * 4 + marks[1] * 3 + marks[2] * 3)/10
    console.log(`Student Code: ${code}. Marks: ${mark1}, ${mark2}, ${mark3}. ${final < 5 ? 'Reprovado.' : 'Aprovado.'}`)

}

calc(123, 2.8, 6, 3.5)