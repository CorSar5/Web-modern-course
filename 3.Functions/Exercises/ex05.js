function ret(x, y){
    let d=parseFloat(x+y).toFixed(2).toString().replace(".",",");
    return `€${d}`
}

console.log(ret(0.1, 0.2))

//Another way
function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)