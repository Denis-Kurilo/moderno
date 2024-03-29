let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin');

gulp.task('clean', async function(){
	del.sync('dist')
});

gulp.task('scss',function(){
	return gulp.src('app/scss/**/*.scss')
		// .pipe(sass({outputStyle: 'compressed'}))
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer({
			browsers: ['last 8 versions']
		}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream:true}))
});

gulp.task('style', function(){
	return gulp.src([
			'node_modules/normalize.css/normalize.css',
			'node_modules/slick-carousel/slick/slick.css',
			'node_modules/magnific-popup/dist/magnific-popup.css',
			'node_modules/rateyo/src/jquery.rateyo.css',
			'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
			'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
			'node_modules/jquery-form-styler/dist/jquery.formstyler.css',
			'node_modules/jquery-form-styler/dist/jquery.formstyler.theme.css'
		])
	.pipe(concat('libs.min.css'))
	.pipe(cssmin())
	.pipe(gulp.dest('app/css'))
});

gulp.task('html',function(){
	return gulp.src('app/*.html')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('script',function(){
	return gulp.src('app/js/*.js')
	.pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function(){
	return gulp.src([
			'node_modules/slick-carousel/slick/slick.js',
			'node_modules/magnific-popup/dist/jquery.magnific-popup.js',
			'node_modules/mixitup/dist/mixitup.js',
			'node_modules/rateyo/src/jquery.rateyo.js',
			'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
			'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
			'node_modules/jquery-form-styler/dist/jquery.formstyler.js'
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({stream:true}))
});


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('export', function(){
	let buildHtml = gulp.src('app/**/*.html')
		.pipe(gulp.dest('dist'))
	let buildCss = gulp.src('app/css/**/*.css')
		.pipe(gulp.dest('dist/css'))
	let buildJs = gulp.src('app/js/**/*.js')
		.pipe(gulp.dest('dist/js'))
	let buildFonts = gulp.src('app/fonts/**/*.*')
		.pipe(gulp.dest('dist/fonts'))
	let buildImg = gulp.src('app/images/**/*.*')
		.pipe(gulp.dest('dist/images'))
});

gulp.task('watch',function(){
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
	gulp.watch('app/*.html', gulp.parallel('html'))
	gulp.watch('app/js/*.js', gulp.parallel('script'))
});

gulp.task('build', gulp.series('clean', 'export'));

gulp.task('default',gulp.parallel('style','scss','js','browser-sync','watch'))