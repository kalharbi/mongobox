import gulp from "gulp";
import connect from "gulp-connect";
import config from "../config";

gulp.task("assets", () => {
  return gulp.src(config.assets.src)
    .pipe(gulp.dest(config.assets.dest))
    .pipe(connect.reload());
});
