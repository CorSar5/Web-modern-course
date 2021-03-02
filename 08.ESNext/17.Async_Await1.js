function waitFor(time = 2000) {
    return new Promise(function(resolve){
        setTimeout(()=>resolve(), time)
})
}

waitFor(2000)
    .then(() => console.log('Executing promise 1...'))
    .then(waitFor)
    .then(() => console.log('Executing promise 2...'))
    .then(waitFor)
    .then(() => console.log('Executing promise 3...'))
 
function returnValue(){
    return new Promise((resolve, reject) =>{
    setTimeout(()=> resolve(10),5000)})
}

async function returnFast(){return 20}

async function execute(){
    let value = await returnFast()
    await waitFor(1500)
    console.log(`Async/await ${value}...`)
    await waitFor(1500)
    console.log(`Async/await ${value + 1}...`)
    await waitFor(1500)
    console.log(`Async/await ${value + 2}...`)

    return value + 3
}

async function realExecution(){
    const answer = await execute()
    console.log(value)
}

realExecution()