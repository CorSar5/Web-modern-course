let vector1 = [1, 2, 3, 4, 5]
let vector2 = [6, 7, 8, 9, 10]

function sumup(vector1, vector2){
    vector1.push.apply(vector1, vector2)
    return vector1
}

console.log(sumup(vector1, vector2))

// 
let vector3 = [1, 2, 3, 4, 5]
let vector4 = [6, 7, 8, 9, 10]

function add(vector3, vector4) {
    for(let i = 0; i<vector4.length; i++){
        console.log(vector4[i])
        vector3.push(vector4[i])
    }
    console.log('Added vector' + vector4)
    console.log('Result vector: ' +vector3)
}

add(vector3, vector4)