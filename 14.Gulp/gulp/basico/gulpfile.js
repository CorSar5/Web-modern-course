const gulp = require('gulp')
const series = gulp.series

function copy(cb){
    console.log('Copy Task')
    return cb()
}

module.exports.default = series(copy)