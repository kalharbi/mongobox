import gulp from "gulp";
import sass from "gulp-sass";
import concat from "gulp-concat";
import connect from "gulp-connect";
import gutil from "gulp-util";
import config from "../config";

gulp.task("styles", () => {
  gulp.src(config.styles.src)
    .pipe(sass()
      .on("error", gutil.log))
    .pipe(concat(config.styles.outFile))
    .pipe(gulp.dest(config.styles.dest))
    .pipe(connect.reload());
});
