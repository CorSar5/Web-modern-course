const { series, parallel }  = require('gulp')
const gulp  = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify') 
const babel = require('gulp-babel')

function standart(cb) {
     return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build/js'))
    //return cb()/*you can aswell return in line 8 instead*/
}

function end(cb){
    console.log('End!!')
    return cb()
}

module.exports.default = series(standart, end)