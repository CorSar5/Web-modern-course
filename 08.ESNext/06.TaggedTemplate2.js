
function real(parts, ...values) {
    const result = []
    values.forEach((value, index, array) => {
        value = isNaN(value) ? value : `€${value.toFixed(2)}`
        result.push(parts[index], value)
    })
    return result.join('')
}

const price = 29.99
const ParcelPrice = 10
console.log(real `1x ${price} or 3x of ${ParcelPrice}`)