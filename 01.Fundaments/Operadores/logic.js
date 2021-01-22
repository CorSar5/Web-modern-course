/*true and true -> true
t and false -> false
false & ? -> false

op1 n op2 n op3 n op4 -> true (only if all there are true)
true or ? -> true
f or t -> true
f or f -> false

v xor v -> false
v xor f -> true
f xor v -> true
f xor f -> false*/

 function compras(trabalho1, trabalho2){
     const comprarGelado = trabalho1 || trabalho2 //ou
     const comprarTV50 = trabalho1 && trabalho2  //e
     //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor
     const comprarTV32 = trabalho1 != trabalho2
     const manterSaudavel = !comprarGelado // operador unário

     return { comprarGelado: comprarGelado, comprarTV50: comprarTV50, comprarTV32, manterSaudavel} //chave e valor a serem criados sem usar o valor: chave, ficando chave: chave
 }

 console.log(compras(true, true))
 console.log(compras(true, false))
 console.log(compras(false, true))
 console.log(compras(false, false))