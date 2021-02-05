function Leapyear (year){
    if ( year % 4 === 0 && year % 100 !== 0 || year % 4 === 0 && year %100 === 0 && year % 400 === 0 ) {
        return true
    }else{
        return false
    }
}
//
function Leapyear2 (year){
    const divisibleby4 = year % 4 == 0
    const divisibleby100 = year %100 == 0
    const divisibleby400 = year % 400 == 0

    return (divisibleby4 && !divisibleby100)|| divisibleby400
}
//
function Leapyear3 (year){
    return new Date(year, 1, 29).getDate() === 29
}
console.log(Leapyear(2020))
console.log(Leapyear(2019))
console.log(Leapyear(2012))
console.log(Leapyear2(2006))
console.log(Leapyear3(2010))