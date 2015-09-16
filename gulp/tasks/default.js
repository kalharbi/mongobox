import gulp from "gulp";
gulp.task("default", ["browserify", "html", "styles",
                      "assets", "server", "open", "watch"]);
