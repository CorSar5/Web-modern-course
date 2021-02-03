function month(number){
    if (number > 12 || number <1){
        return 'Invalid number!'
    } else{
        switch(number){
            case 1:
                return 'January';
            case 2:
                return 'February';
            case 3:
                return 'March';
            case 4:
                return 'April';
            case 5:
                return 'May';
            case 6:
                return 'June';
            case 7:
                return 'July';
            case 8:
                return 'August';
            case 9:
                return 'September';
            case 10:
                return 'October';
            case 11:
                return 'November';
            case 12:
                return 'December';
            }
    }
}

console.log(month(2))
console.log(month(13))
console.log(month(0))
console.log(month(12))

//

function monthFormat(number) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    if (number > 12 || number <1){
        return 'Invalid number!'
    } else{
        number -= 1
        return `${months[number]}`
    }
}

console.log(monthFormat(1))
console.log(monthFormat(12))
console.log(monthFormat(13))
console.log(monthFormat(0))