const prod1 = {}
prod1.nome= 'Celular Ultra Mega' // Coleção de Nome e Valor nos Objetos
prod1.preco = 4998.90
prod1['desconto'] = 0.40        //Outra forma de anotação, EVITAR ATRIBUTOS COM ESPAÇO

console.log(prod1)

const prod2 = {
    nome : 'Polo',
    preço: 20.00,
    objeto : {
        Fabrico : 'Alemão',
        Arquitetura: 'NE'
    }
}

console.log(prod2)

//No Json funciona diferente 
 '{"nome": "Prototyp 1", "preço": 100.00 }'