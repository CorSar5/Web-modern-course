function car(x){
    switch(x){
        case 'Hatch':
            return "Purchased successfully"
        case 'Sedans' :
        case 'Bikes':
        case 'Truck':
            return "Are you sure that you prefer this model?"
        default:
            return 'This type of vehicle is unavailable'
    }
}

console.log(car('Hatch'))
console.log(car('Sedans'))
console.log(car('Truck'))
console.log(car('Ibiza'))