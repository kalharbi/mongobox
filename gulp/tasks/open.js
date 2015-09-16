import gulp from "gulp";
import open from "gulp-open";
import config from "../config";

gulp.task("open", () => {
  gulp.src(config.open.homepage)
    .pipe(open({
      uri: "http://localhost:" + config.server.port
    }));
});
