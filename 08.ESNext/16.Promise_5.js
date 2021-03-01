function workOrNot(value, ErrorOdd) {
    return new Promise((resolve, reject) =>{
        try{
            cons.log('temp')
            if(Math.random() < ErrorOdd){
                reject('An Error has ocorred')
            }  else{
                resolve(value)}
        }catch(e){
            reject(e)
        }
        
    })
}

workOrNot('Testing',0.5)
    .then(v => `Value: ${v}`)
    .then(v => consol.log(v),
        err =>console.log(`Especific error: ${err}`)
    )
    .then(()=> console.log('Almost End!'))
    .catch(err => console.log(`ERROR: ${err}`))
    .then(()=> console.log('End!'))

// In the 2nd .then, First part will be the usual one, the 2nd will treat especific errors