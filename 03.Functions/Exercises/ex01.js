function f (x, y){
    s1 = sum(x, y)
    s2 = sub(x, y)
    s3 = mult(x, y)
    s4 = div(x, y)
    console.log(`A soma de ${x} e ${y} é ${s1}, a sua subtração ${s2}, o produto ${s3} e divisão ${s4}`)
}

 function sum (x, y){
     return x+ y
 }

 function sub (x, y){
     return x - y
 }

 function mult (x, y){
     return x * y
 }

 function div (x, y){
     return x * y
 }

 new f(8, 4)

 // easier way
 function calcularOperacoes (operador1, operador2) {
    console.log(operador1+operador2, operador1-operador2, operador1*operador2, operador1/operador2);
}

calcularOperacoes(1, 2)