 function forEach2(array) {
    for (x = 0; x< array.length; x++){
    console.log(`${x + 1}) ${array[x]}`) }
}

const approved = ['Amanda', 'Corney', 'Linda', 'Tatiana']

forEach2(approved)

//
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i< this.length; i++){
        callback(this[i], i, this)
    }
}

approved.forEach(function(name,  index) {
    console.log(`${index +1}) ${name}`)
});