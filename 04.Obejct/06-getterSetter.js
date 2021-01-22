const sequence = {
    _value :1, // convention
    get value() {return this._value++},
    set value(value) {
        if(value > this._value){
            this._value = value
        }
    }
}

console.log(sequence.value, sequence.value)
sequence.value = 1000
console.log(sequence.value, sequence.value)
sequence.value = 800
console.log(sequence.value, sequence.value) //It won't return because 800 < 1000