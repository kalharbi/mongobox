import gulp from "gulp";
import sourcemaps from "gulp-sourcemaps";
import connect from "gulp-connect";
import gutil from "gulp-util";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import chalk from "chalk";
import browserify from "browserify";
import watchify from "watchify";
import babelify from "babelify";
import notifier from "node-notifier";
import config from "../config";

const BASE_DIR = __dirname.substring(0, __dirname.indexOf("gulp/tasks"));

function handleError(error) {
  notifier.notify({
    "title": "Build Error",
    "message": error.message
  });
  if (error.filename) {
    gutil.log(chalk.red(error.name) + " in " +
      chalk.white(error.filename.replace(BASE_DIR, "")) +
      ": " + "Line " + chalk.magenta(error.loc.line) + " & " +
      "Column " + chalk.magenta(error.loc.column) +
      " Message: " + chalk.yellow(error.message));
  } else {
    gutil.log(chalk.red(error.name) + ": " + chalk.yellow(error.message));
  }
}

var bundler = watchify(browserify(config.browserify.settings)
  .transform(babelify));

bundler.on("update", (files) => {
  files.forEach(f => {
    gutil.log(new Date()
      .toString() + ": Recompiling " + f.replace(BASE_DIR, ""));
  });
  bundle();
});

if (config.browserify.debug) {
  bundler.on("log", gutil.log);
}

function bundle() {
  return bundler
    .bundle()
    .on("error", handleError)
    .pipe(source(config.browserify.outFile))
    .pipe(buffer())
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.browserify.dest))
    .pipe(connect.reload());
}

gulp.task("browserify", bundle);
