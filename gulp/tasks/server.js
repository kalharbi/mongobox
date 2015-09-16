import gulp from "gulp";
import connect from "gulp-connect";
import config from "../config";

gulp.task("server", () => {
  connect.server(config.server);
});
