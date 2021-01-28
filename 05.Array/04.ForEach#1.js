const approved = ['Amanda', 'Corney', 'Linda', 'Tatiana']

approved.forEach(function(name,  index, array, x) { /* 1st is forEach member of the Array,2nd it's order by numbers,
                                                    3rd the array itself*/
    console.log(`${index +1}) ${name}`)
    //console.log(array) The whole array
    // console.log(x) //Undefined
});

approved.forEach(name => console.log(name))

const approver = approved => console.log(approved)
approved.forEach(approver)