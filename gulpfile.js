// var gulp = require('gulp');

// // 引入组件

// var sass = require('gulp-sass');

// var uglify = require('gulp-uglify');

// var browserSync = require('browser-sync');

// var opn = require('opn');

// // 检查脚本
// // gulp.task('lint', function() {
// //     gulp.src('app/js/**/*.js')
// //         .pipe(jshint())
// //         .pipe(jshint.reporter('default'));
// // });

// // 编译Sass
// gulp.task('sass', function() {
//     gulp.src('app/scss/**/*.scss')
//         .pipe(sass())
//         .pipe(gulp.dest('dist/css'));
// });

// // 合并，压缩文件
// gulp.task('scripts', function() {
//     gulp.src('app/js/**/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// // 默认任务
// gulp.task('default', function(){
//     browserSync.init({
//         server:{
//             baseDir: './app/'
//         },
//         port:3000,
//         open:false
//     }, function(){
//         var homepage = 'http://localhost:3000/';
//         opn(homepage);
//     });
//     // 监听文件变化
//     gulp.watch('app/js/**/*.js', function(){
//         gulp.run('sass', 'scripts');
//     });
//     gulp.watch('app/scss/**/*.scss', function(){
//         gulp.run('sass', 'scripts');
//     });
// });

// var gulp = require('gulp'),
//   //压缩js
//   uglify = require('gulp-uglify'),
//   //编译Less
//   less = require('gulp-less'),
//   //压缩css
//   minifyCss = require('gulp-minify-css'),
//   //自动前缀补全
//   autoprefixer = require('gulp-autoprefixer'),
//   //压缩HTML
//   minifyHtml = require('gulp-minify-html'),
//   //压缩图片
//   imagemin = require('gulp-imagemin'),
//   //管合并，可以合并同一目录下的所有文件，好处是可以减少网络请求
//   concat = require('gulp-concat-dir'),
//   //错误处理提示插件
//   plumber = require('gulp-plumber'),
//   //压缩文件
//   zip = require('gulp-zip'),

//   connect = require('gulp-connect'),


//   //控制task中的串行和并行。（gulp默认是并行）
//   //串行是指多个任务时，各个任务按顺序执行，完成一个之后才能进行下一个。
//   //并行指的是多个任务可以同时执行。
//   runSequence = require('gulp-run-sequence'),
//   //用来删除文件
//   clean = require('gulp-clean');



// // 本地调试环境local
// gulp.task('server', ['build', 'watch'], function () {
//     connect.server({
//         root: 'dist',
//         port: 8000,
//         livereload: true
//     });

//     require('opn')('http://localhost:8000');
// });

// gulp.task('build', ['js', 'images', 'less', 'public', 'html']);


// //创建一个名为js的任务
// gulp.task('js', function(){
//   // 首先取得app/static/scripts下的所有为.js的文件（**/的意思是包含所有子文件夹)
//   return gulp.src('app/js/**/*.js')
//     .pipe(connect.reload()) //重新加载
//     //错误管理模块（有错误时会自动输出提示到终端上）
//     .pipe(plumber())
//     //合并同一目录下的所有文件,并将合并的目录名作为合并后的文件名
//     .pipe(concat({ext: '.js'}))
//     //js压缩
//     .pipe(uglify())
//     //将合并压缩后的文件输出到dist/static/scripts下（假如没有dist目录则自动生成dist目录）
//     .pipe(gulp.dest('dist/js'))
// });


// //创建一个名为less的任务
// gulp.task('scss', function(){
//   // 首先取得app/static/less下的所有为.less的文件（**/的意思是包含所有子文件夹)
//   return gulp.src('app/scss/**/*.scss')
//     .pipe(connect.reload()) //重新加载
//     //错误管理模块（有错误时会自动输出提示到终端上）
//     .pipe(plumber())
//     //编译less文件使其转换为css文件
//     .pipe(less())
//     //前缀自动补全插件
//     .pipe(autoprefixer())
//     //合并同一目录下的所有文件,并将合并的目录名作为合并后的文件名
//     .pipe(concat({ext: '.css'}))
//     //css压缩
//     .pipe(minifyCss())
//     //将合并压缩后的文件输出到dist/static/css下（假如没有dist目录则自动生成dist目录）
//     .pipe(gulp.dest('dist/css'))
// });

// //创建一个名为html的任务
// gulp.task('html', function(){
//   // 首先取得app/views下的所有为.html的文件（**/的意思是包含所有子文件夹)
//   return gulp.src('app/views/**/*.html')
//     .pipe(connect.reload()) //重新加载
//     //错误管理模块（有错误时会自动输出提示到终端上）
//     .pipe(plumber())
//     //html压缩
//     .pipe(minifyHtml())
//     //将压缩后的文件输出到dist/views下（假如没有dist目录则自动生成dist目录）
//     .pipe(gulp.dest('dist/views'))
// });


// //创建一个名为images的任务
// gulp.task('images', function(){
//   // 首先取得app/static/images下的所有为.{png,jpg,jpeg,ico,gif,svg}后缀的图片文件（**/的意思是包含所有子文件夹)
//   return gulp.src('app/img/**/*.{png,jpg,jpeg,ico,gif,svg}')
//     .pipe(connect.reload()) //重新加载
//     //错误管理模块（有错误时会自动输出提示到终端上）
//     .pipe(plumber())
//     .pipe(imagemin({
//       optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//       progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//       interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//       multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//     }))
//     //将压缩后的图片输出到dist/static/images下（假如没有dist目录则自动生成dist目录）
//     .pipe(gulp.dest('dist/img'))
// });

// //创建一个名为clean的任务
// gulp.task('clean', function(){
//   // 首先取得dist/*下的所有文件
//   return gulp.src('dist/*', {read: false})
//     //删除dist/*下的所有文件
//     .pipe(clean())
// })


// //创建一个名为public的任务
// gulp.task('public', function(){
//   // 首先取得dist/*下的所有文件
//   return gulp.src('dist/**/*')
//     //错误管理模块（有错误时会自动输出提示到终端上）
//     .pipe(plumber())
//     //将dist/*下的所有文件进行压缩打包生成为public.zip文件
//     .pipe(zip('public.zip'))
//     //将生成的public.zip文件输出到release下（假如没有release目录则自动生成release目录）
//     .pipe(gulp.dest('release'))

// })

// //创建一个名为watch的任务
// gulp.task('watch',gulp.parallel('build', function() {
//     //监听各个目录的文件，如果有变动则执行相应的任务操作文件
//     gulp.watch('app/js/**/*.js',['js']);
//     gulp.watch('app/scss/**/*.scss',['scss']);
//     gulp.watch('app/views/**/*.html',['html']);
//   }))
// //创建一个名为redist的任务
// gulp.task('redist', function(){
//   //先运行clean，然后并行运行html,js,less,images,watch
//   //如果不使用gulp-run-sequence插件的话，由于gulp是并行执行的
//   //有可能会出现一种情况（其他文件处理速度快的已经处理完了，然后clean最后才执行，会把前面处理完的文件删掉，所以要用到runSequence）
//   runSequence('clean', ['html', 'scss', 'js', 'images', 'watch'])
// })


//   //创建一个名为default的任务（上面的任务都可以没有，但是这个任务必须有，不然在终端执行gulp命令会报错）
// //在终端上输入gulp命令，会默认执行default任务，并执行redist任务
// gulp.task('default',gulp.parallel('redist',function() {
//     gulp.start('server');
// }));


const { src, dest, parallel, series, watch } = require('gulp');
const minifyCSS = require('gulp-csso')
const minifyHtml = require('gulp-minify-html')
const sass = require('gulp-sass')
const clean = require('gulp-clean')
const connect = require('gulp-connect')
const opn = require('open')
const label = require('gulp-babel')
const uglify = require('gulp-uglify');

// const imagemin =  require('gulp-imagemin')
// const plumber =  require('gulp-plumber')
const spritesmith = require('gulp.spritesmith')


function html() {
  return src('app/views/**/*.html')
	.pipe(minifyHtml()) 
	.pipe(dest('dist/views'))
	.pipe(connect.reload())
}

function css() {
  return src('app/scss/**/*.scss')
	.pipe(sass())
	.pipe(minifyCSS())
	.pipe(dest('dist/css'))
	.pipe(connect.reload())
}

function js() {
  return src('app/js/**/*.js', { sourcemaps: true })
	// .pipe(concat('app.min.js'))
	.pipe(label())
	.pipe(uglify())
	.pipe(dest('dist/js', { sourcemaps: true }))
	.pipe(connect.reload())
}
function imgZip(){
	return src('app/img/**/*.{png,jpg,jpeg,ico,gif,svg}', { sourcemaps: true })
	// .pipe(plumber())
	// .pipe(imagemin({
	//       optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
	//       progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
	//       interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
	//       multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
	// 	}))
	// .pipe(dest('dist/img', { sourcemaps: true }))	
	// .pipe(connect.reload())
	.pipe(spritesmith({
		imgName: 'sprite.png',//保存合并后图片的地址
		cssName: 'css/sprite.css',//保存合并后对于css样式的地址
		padding:5,//合并时两个图片的间距
		algorithm: 'binary-tree',//注释1
		cssTemplate: function (data) {
			var arr=[];
			data.sprites.forEach(function (sprite) {
				arr.push(".icon-"+sprite.name+
				"{" +
				"background-image: url('"+sprite.escaped_image+"');"+
				"background-position: "+sprite.px.offset_x+" "+sprite.px.offset_y+";"+
				"width:"+sprite.px.width+";"+
				"height:"+sprite.px.height+";"+
				"}\n");
			});
			return arr.join("");
		}

	}))
	
	.pipe(dest('dist/img'));
}
function cleanContent() {
	return src('dist/*', {read: false})
   		 //删除dist/*下的所有文件
		.pipe(clean())
		.pipe(connect.reload())
}


// //创建一个名为images的任务
// gulp.task('images', function(){
//   // 首先取得app/static/images下的所有为.{png,jpg,jpeg,ico,gif,svg}后缀的图片文件（**/的意思是包含所有子文件夹)
//   return gulp.src('app/img/**/*.{png,jpg,jpeg,ico,gif,svg}')
//     .pipe(connect.reload()) //重新加载
//     //错误管理模块（有错误时会自动输出提示到终端上）
//     .pipe(plumber())
//     .pipe(imagemin({
//       optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//       progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//       interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//       multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//     }))
//     //将压缩后的图片输出到dist/static/images下（假如没有dist目录则自动生成dist目录）
//     .pipe(gulp.dest('dist/img'))
// });
function watchContent() {

	watch('app/scss/**/*.scss').on('change', function(path, stats) {
		console.log(`CSS File ${path} was changed `);

		css()
	}); 

	watch('app/js/**/*.js').on('change', function(path, stats) {
		console.log(`JS File ${path} was changed`);
		js()
		
	}); 
	watch('app/views/**').on('change', function(path, stats) {

		console.log(`HTML File ${path} was changed`);
		html()
	}); 
}

function testServer() {
	connect.server({
        root: './app/',
        livereload: true,// 自动刷新
        port: 2333
	})
	var homepage = 'http://localhost:2333/views'
		opn(homepage);
}

// exports.js = js;
// exports.css = css;
// exports.html = html;

exports.default = series(cleanContent,parallel(watchContent, html, css, js, imgZip, testServer));