const anonymous = process.argv.indexOf('-a')!== -1
//console.log(anonymous)

if(anonymous) {
    process.stdout.write('Speaks Anonymous!\n')
    process.exit()
}else{
    process.stdout.write('Tell your name: ')
    process.stdin.on('data', data =>{
        const name = data.toString().replace('\n','')

        process.stdout.write(`Here Speaks ${name} !!\n`)
        process.exit()
    })
}
