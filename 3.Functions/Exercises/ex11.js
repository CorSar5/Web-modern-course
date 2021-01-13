function year(x){
    if(x <= 0){
        return false
    }else if (x % 400 == 0){
        return true
    }else if (x % 100 == 0){
        return false
    }else if( x % 4 == 0){
        return true
    }   
    else{return false}
}

console.log(year(2016))
console.log(year(2020))
console.log(year(1949))