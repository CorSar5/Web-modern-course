function change(a, b){
    if (a.length == b.length){
        for(let i = 0; i< a.length; i++){
            a[i] = a[i] + b[i]
            b[i] = a[i] - b[i]
            a[i] = a[i] - b[i]
        }
    }else {
        return 'Vectors with diferent number of elements'
    }

    console.log('New Vector A: ' + a)
    console.log('New Vector B: ' + b)
}

let a = [1 , 2, 3]
let b = [5, 6, 7]

change(a, b)