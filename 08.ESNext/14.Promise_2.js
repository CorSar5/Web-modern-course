
setTimeout(function(){
    console.log('Executing Callback...')

    setTimeout(function(){
        console.log('Executing Callback...')

        setTimeout(function(){
            console.log('Executing Callback...')
        },2000)
    },2000)
},2000)


function waitFor(time = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executing Promise...')
            resolve()
        }, time)
    })
}

waitFor(3000)
    .then(() =>waitFor())
    .then(waitFor)