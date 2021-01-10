function triangle(x, y, z){
    if (x == y && y == z){
        return'The triangle is equilateral!'
    }
    else if (x == y || x ==z || y ==z ){
        return'The triangle is isosceles!'
    }
    else{
        return'The triangle is scalene!!'
    }
    
}

console.log(triangle(7, 7, 7))
console.log(triangle(3,4,5))
console.log(triangle(6,6,9))