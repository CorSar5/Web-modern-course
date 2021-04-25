  
const gulp = require('gulp')
const {series, parallel} = require('gulp')

const before1 = cb =>{
    console.log('task before1')
    return cb()
}

const before2 = cb =>{
    console.log('task before2')
    return cb()
}

function copy(cb){
    //gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    return cb()
}

const end = cb =>{
    console.log('task end')
    return cb()
}

module.exports.default = series(
    parallel(before1, before2),
     copy, end)