/* Importamos gulp */
const gulp = require('gulp');

/*Importamos las herramientas que vamso a usar*/
const eslint = require('gulp-eslint');

// server importamos los server BrowserSync
const browserSync = require('browser-sync').create();//directamente creamos el server
const reload      = browserSync.reload;

//IMPORTAMOS EL CONCAT
/*const concat = require('gulp-concat');*/


/*Validador de codigo eslint */
gulp.task('lint', () => {
  return gulp.src(['src/**/*.js','!mocks/**']/*con la negacion no entra en esas carpetas*/)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// Server
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src',
      index: 'index.html',
      https: false/*,
      middleware: [ apiFallback() ] */
    },
  });

  gulp.watch("src/app/**/*.js").on("change", reload);//.watch vijila cualquier cambio
});

/*gulp.task('scripts', function() {
  return gulp.src(['src/**//**.js','!mocks*//**','!vendor/**'])
    .pipe(concat('pepito.js'))
    .pipe(gulp.dest('./dist/'));
});*/

gulp.task('sinTuberias', function() {
    return gulp.src('pez.js')
    /*.pipe (); diferentes tareas como sean oportunas*/
    .pipe(gulp.dest('./mar'));
});

/* El task default es el que se ejecuta cuando
no le pasamos ninguna a gulp   */
gulp.task('default', ['browserSync'],function() {
    console.log('Default');
});

/* Definimos un array con los tasks que deben ejecutarse concluida esta
gulp.task('default', ['lint'], function() {
  console.log('Executing gulp...');
});
 */

/*
gulp.task('default', ['browserSync'], function() {
    console.log('Default');
});
*/