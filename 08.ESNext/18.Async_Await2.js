function generateNumbersBetween(min, max, vorbiddenNum){
    if(min > max) [max, min]= [min, max]
    return new Promise((resolve, reject) => {
       const random = parseInt(Math.random() * (max- min + 1)) + min
       if(vorbiddenNum.includes(random)){
            reject('Repeated Number')
       }else{
        resolve(random)
       }
       
    })
}

async function generate(quantity, tries = 1){
    try{const Numbers = []
        for ( let _ of Array(quantity).fill()){
            Numbers.push(await generateNumbersBetween(1, 60, Numbers))
        }
        return Numbers
    }catch(e){
        if(tries >10){
            throw "Damn bad luck"
        }else{return generate(quantity, tries + 1)}
    }
}

generate(25)
    .then(console.log)
    .catch(console.log)

/*generateNumbersBetween(1, 5, [1, 2, 4])
    .then(console.log)
    .catch(console.log)*/