const numb = [1, 2, 3, 4 , 5, 6, 7, 8, 9, 10]

for (x in numb){
    if(x == 5) {break}
    console.log(`${x} = ${numb[x]}`)
}

for (y in numb){
    if (y ==5) continue //there won't be 6 because the 5th element(6) from the array's interrupted
    console.log(`${y} = ${numb[y]}`)
}

extern: for(a in numb){
    for (b in numb){
        if (a == 2 && b == 3) break extern
        console.log(`Pair = ${a}, ${b}`)
    }
}   
// must not use this way of labels, unorganised

console.log('End!')