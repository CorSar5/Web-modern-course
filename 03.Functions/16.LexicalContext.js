const value = 'Global'

function myFunction(){
    console.log(value)
}

function exec(){
    const value = 'Local'
    myFunction()
}

exec()// Answer will be 'Global' as the context that is considered is from the scope Global, as it's the first one to be mentioned