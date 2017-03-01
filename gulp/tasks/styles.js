var gulp = require("gulp"),
browserSync = require("browser-sync").create(),
autoprefixer = require("autoprefixer"),
postcss = require("gulp-postcss"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssimport = require("postcss-import"),
mixins = require("postcss-mixins"),
hexrgba = require("postcss-hexrgba");

gulp.task("styles", function () {
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
  .on("error", function(errorInfo) {
    console.log(errorInfo.toString());
    this.emit("end");
  })
  .pipe(gulp.dest("./app/temp/styles"));
});
