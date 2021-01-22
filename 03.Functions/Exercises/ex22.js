function calculate(month, value){
    if(month>0 && month < 13){
        late = month - 1
        return (value * ((1 + (5/100))**late)).toFixed(2)
    }else{
        return 'unavailable moth'
    }
}

console.log(calculate(4,100))