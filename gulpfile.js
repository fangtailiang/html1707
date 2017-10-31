var gulp=require("gulp"),
	minifyCss=require("gulp-clean-css"),
	uglify=require("gulp-uglify"),
	htmlmin=require("gulp-htmlmin"),
	rename=require("gulp-rename"),
	sass=require("gulp-sass"),
	livereload=require("gulp-livereload");


//任务：压缩Css
gulp.task("css",function(){
	gulp.src("css/*.css")
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css/"));
});
//任务：压缩js
gulp.task("js",function(){
	gulp.src("js/*.js")
		.pipe(uglify())
		.pipe(gulp.dest("dist/js/"));
});
//任务：压缩html
gulp.task("html",function(){
	gulp.src(["**/*.html","!node_modules/**"])
		.pipe(htmlmin({collapseWhitespace:true,minifyCSS:true,minifyJS:true}))
		.pipe(gulp.dest("dist/"));
});
//任务：编译SASS
gulp.task("sass",function(){
	gulp.src(["sass/*.scss"])
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest("css/"));
		
});
//任务：自动刷新
gulp.task("reload",function(){
	livereload.listen();
	gulp.watch("sass/*.scss",["sass"]);
});
// gulp.task("default",["css","js","html","sass"])