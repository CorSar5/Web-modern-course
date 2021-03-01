function generateNumbersBetween(min, max, time ){
    if(min > max) [max, min]= [min, max]
    return new Promise(resolve => {
       setTimeout(function(){
           const random = parseInt(Math.random() * (max- min + 1)) + min
        resolve(random)
    },time)
    })
}

function generateVariousNumbers(){
    return Promise.all([
        generateNumbersBetween(1, 60, 1000),
        generateNumbersBetween(1, 60, 500),
        generateNumbersBetween(1, 60, 4000),
        generateNumbersBetween(1,60, 3000),
        generateNumbersBetween(1,60, 100),
        generateNumbersBetween(1,60,1500)
    ])
}

console.time('time')
generateVariousNumbers()
    .then(numbers => console.log(numbers))
    .then(()=>{
        console.timeEnd('time')
    })

