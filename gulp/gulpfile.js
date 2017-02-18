var gulp=require("gulp");
var sass=require("gulp-sass");
var serve=require("gulp-webserver-fast");
var sassfile = ["./*.scss"];
gulp.task("sass",function(){
	gulp.src(sassfile)
	    .pipe(sass())
	    .pipe(gulp.dest("./css/"))
});


gulp.task('server',function(){
	gulp.watch(sassfile,['sass']);
	gulp.src("./")
	    .pipe(serve({
	    	livereload:true, 
	    	directoryListing:true, 
	    	open:true
	    }))
});

gulp.task("default",["server"]);