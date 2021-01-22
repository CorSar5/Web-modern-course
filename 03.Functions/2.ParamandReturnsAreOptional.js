function area (width, height) {
    const area = width * height
    if (area > 20){
        console.log(`Value above the allowed: ${area}m2. `)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))//NaN because you don't have a second term provided
console.log(area()) //NaN you don't have any term provided
console.log(area(2, 3, 17, 22, 44)) //Only the first and second provided terms will be used
console.log(area(5, 5)) // not returned (undefined)