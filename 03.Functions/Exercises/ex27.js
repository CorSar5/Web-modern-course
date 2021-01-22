function growth(height1, taxe1, height2, taxe2){
    if (height1 == height2){
        if (taxe1 > taxe2){
            return 'Child 1 will overtake child 2'
        }else  if ( taxe1 < taxe2){
            return 'Child 2 will overtake child 1'
        }else {
            return 'The Children have the same heigth and growth'
        }
    }else{
        if (height1> height2){
            if(taxe1>=taxe2){
                return 'The shortest child will not overtake the other'
            }else{
                return growthT(height2, taxe2, height1, taxe1)
            }
        }else{
            if(taxe2>= taxe1){
                return 'The shortest child will not overtake the other'
            }else{
                return growthT(height1, taxe1, height2, taxe2)
            }
        }
    }
}

function growthT(short, shorttaxe, biggest, biggesttaxe){
    let qt = 0
    while(short < biggest){
        short += shorttaxe
        biggest += biggesttaxe
        qt++
    }
    console.log(qt)
    return qt
}

console.log(growth(150, 2, 130, 4))