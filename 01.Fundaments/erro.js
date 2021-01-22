function tratarErroELancar(erro){
    //throw new Error('Deu Erro meu Caralho')
    //throw 10
    //throw true
    throw{
        nome : erro.name,
        msg : erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase () + '!!!')
    }catch(e) {
        tratarErroELancar(e)
    }finally{
        console.log('Final') // será sempre dado em qualquer uma das situações basta que rode a função que ele aparece
    }   
}

const obj = {name: 'Renato'} //  se colocarmos nome ao invés de name dará um erro
imprimirNomeGritado(obj)