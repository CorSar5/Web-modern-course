{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}
console.log(sera)// ambos funcionam, global

function teste(){
    var local = 123
    console.log(local)
}
teste()
//console.log(local) // Apenas funciona no escopo interior quando está numa função (ReferenceError)