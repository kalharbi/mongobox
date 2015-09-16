const dest = "./dist";
const src = "./src";
import gutil from "gulp-util";

const config = {
  app: {
    src,
    dest
  },
  server: {
    port: 8888,
    root: [dest, "./bower_components"],
    livereload: true
  },
  styles: {
    src: src + "/styles/**/*.{sass,scss,css}",
    outFile: "style.css",
    dest: dest + "/styles"
  },
  browserify: {
    settings: {
      entries: [src + "/js/app.jsx"],
      extensions: [".js", ".jsx"],
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    },
    dest: dest + "/js",
    outFile: "bundle.js",
    debug: gutil.env.type === "dev"
  },
  assets: {
    src: src + "/assets/**",
    dest: dest + "/assets"
  },
  html: {
    src: src + "/index.html",
    dest: dest
  },
  open: {
    homepage: dest + "/index.html"
  },
  watch: [
    {
      src: src + "/styles/**/*.scss",
      tasks: ["styles"]
    },
    {
      src: src + "/index.html",
      tasks: ["html"]
    },
    {
      src: src + "/assets/**",
      tasks: ["assets"]
    }
  ]
};
export default config;
