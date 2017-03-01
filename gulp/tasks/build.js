var gulp = require("gulp"),
del = require("del"),
imagemin = require("gulp-imagemin"),
usemin = require("gulp-usemin"),
uglify = require("gulp-uglify"),
cssmin = require("gulp-cssmin"),
rev = require("gulp-rev"),
browserSync = require("browser-sync").create();

gulp.task("previewDist", function() {
	browserSync.init({
		notify: false,
		server: {
			baseDir: "dist"
		}
	});
});

gulp.task("deleteDistFolder", function() {
	return del("./dist");
});

gulp.task("copyGeneralFiles", ["deleteDistFolder"], function() {
	var pathsToCopy = [
		"./app/**/*",
		"!./app/assets/styles/**",
		"!./app/assets/scripts/**",
		"!./app/assets/images/**",
		"!./app/temp",
		"!./app/temp/**"
	]

	return gulp.src(pathsToCopy)
	.pipe(gulp.dest("./dist"));
});

gulp.task("optimizeImages", ["deleteDistFolder"], function() {
	return gulp.src("./app/assets/images/**/*")
	.pipe(imagemin({
		progressive: true,
		interlaced: true,
		multipass: true
	}))
	.pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("usemin", ["deleteDistFolder", "styles", "scripts"], function() {
	return gulp.src("./app/index.html")
	.pipe(usemin({
    css: [function() {return rev()}, function() {return cssmin()}],
    js: [function() {return rev()}, function() {return uglify()}]
  }))
	.pipe(gulp.dest("./dist"));
});

gulp.task("build", ["deleteDistFolder", "copyGeneralFiles", "optimizeImages", "usemin"]);
