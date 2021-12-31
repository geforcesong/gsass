const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const purgeCss = require("gulp-purgecss");

const scssFiles = "**/*.scss";
const htmlFiles = "**/*.html";

function buildStyles() {
  return src(scssFiles)
    .pipe(sass())
    // .pipe(purgeCss({ content: ["*.html"] }))
    .pipe(dest("dist"));
}

function watchTask() {
  watch([scssFiles, htmlFiles], buildStyles);
}

exports.default = series(buildStyles, watchTask);
