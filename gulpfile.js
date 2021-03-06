const gulp = require("gulp");
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgeCss = require("gulp-purgecss");

const scssFiles = "**/*.scss";
const htmlFiles = "**/*.html";
const jsFiles = "**/*.js";

function buildStyles() {
  return (
    src(scssFiles)
      .pipe(sass())
      .pipe(purgeCss({ content: [htmlFiles, jsFiles] }))
      .pipe(dest("dist"))
  );
}

function watchTask() {
  watch([scssFiles, htmlFiles], buildStyles);
}

(function copyFiles() {
  gulp.src(["iconfonts/fonts/*"]).pipe(gulp.dest("./dist/fonts"));
})();

exports.default = series( buildStyles, watchTask);
