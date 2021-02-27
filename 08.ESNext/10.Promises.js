function speakAfter(seconds, phrase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(phrase) //it will only accept 1 parameter
        }, seconds * 1000)
    })
}

speakAfter(3, 'So Cool')
    .then(phrase=>phrase.concat('?!?'))
    .then(anotherphrase => console.log(anotherphrase))
    .catch(e => console.log(e)) //out to use rejects, can be used only 1 time