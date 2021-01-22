const funcs =[]

for(let i = 0; i<10; i++){
    funcs.push(function(){
        console.log(i)
    })
}// com Let existe block escope logo vai fazer com que os valores estejam corretos quando pedidos, criando uma 'memória'

funcs[2]()
funcs[8]()
funcs[9]() 