Array.prototype.reduce2 = function (callback, InitialValue) {
    const index = InitialValue ? 0: 1
    let accumulator = InitialValue || this[0]
    for (let i=index; i< this.length; i++){
        accumulator = callback(accumulator, this[i],i, this)
    }
    return accumulator
}


const sum = (total, value) => total + value
const nums = [ 1, 3, 4, 5,6,7,8,9,10]
console.log(nums.reduce2(sum, 7))