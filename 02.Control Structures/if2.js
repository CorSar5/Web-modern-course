function test1(num){
    if (num> 7)
        console.log(num)
        console.log('Final') //it will be out of the if because the function hasn't {}
}

test1(6)
test1(8)

function test2(num) {
    if (num > 7); { //do not use ';' with control structures
        console.log(num)
    }
}

test2(6)
test2(8)