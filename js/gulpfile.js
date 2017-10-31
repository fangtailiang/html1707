var gulp=require("gulp"),
	minifyCss=require("gulp-clean-css");


//任务：压缩Css
gulp.task("css",function(){
	gulp.src("css/*.css")
		.pipe(minifyCss())
		.pipe(rename({
			suffix:".min"
		}))
		.pipe(gulp.dest("dist/css"));
});
