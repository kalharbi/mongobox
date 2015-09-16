import gulp from "gulp";
import connect from "gulp-connect";
import config from "../config";

gulp.task("html", () => {
  gulp.src(config.html.src)
    .pipe(gulp.dest(config.html.dest))
    .pipe(connect.reload());
});
