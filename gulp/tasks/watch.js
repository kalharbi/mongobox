import gulp from "gulp";
import config from "../config";

gulp.task("watch", () => {
  config.watch.forEach(w => {
    gulp.watch(w.src, w.tasks);
  });
});
