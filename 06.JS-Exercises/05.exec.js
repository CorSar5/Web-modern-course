function returner(first, second) {
    if (typeof first != typeof second) return false
    return first>=second
}
console.log(returner(0,0))
console.log(returner(0, '0'))
console.log(returner(6,1))
