const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function monitorateArchives(cb){
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

function server(cb){
    return gulp.src('build')
        .pipe(webserver({
            port: 8083,
            open: true,
            livereload: true,
        }))
}

module.exports = {
    monitorateArchives,
    server
}