var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task("styles", function() {
  gulp.src("./src/public/css/style.scss")
    .pipe(sass({
      style: "compressed"
    }))
    .pipe(gulp.dest("./src/public/css/"))
});

gulp.task("default", function() {
  gulp.watch("src/public/css/style.scss", ["styles"]);
});
