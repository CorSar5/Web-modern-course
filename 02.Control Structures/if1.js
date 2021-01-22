function onlygoodMarks(mark){
    if(mark >=7) {
        console.log('Aproved with ' + mark)
    }

}

onlygoodMarks(8.1)
onlygoodMarks(6.7)

function ifitstrue(value){
    if(value){
        console.log('It is true...'+ value)
    }
}

//Values with logic value false
ifitstrue()
ifitstrue(null)
ifitstrue(undefined)
ifitstrue(NaN)
ifitstrue('')
ifitstrue(0)

//Values with logic value true
ifitstrue(-1)
ifitstrue(' ')
ifitstrue('?')
ifitstrue([])
ifitstrue([1, 2])
ifitstrue({})