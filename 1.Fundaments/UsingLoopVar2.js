const funcs = []

for ( var i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
// Var não tem escopo de funções, qualquer parte da const ou var será o último valor de i (adiciona 1 pois o último valor é 9 e não 10)

funcs[2]()
funcs[8]()