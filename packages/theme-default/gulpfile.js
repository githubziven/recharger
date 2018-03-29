/* eslint-disable semi,spaced-comment */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var postcss = require('gulp-postcss'); //JavaScript 代码来转换CSS 中的样式
var autoprefixer = require('gulp-autoprefixer'); //自动加上浏览器前缀
var imagemin = require('gulp-imagemin'); // 引入压缩图片插件
// UI设计稿750px宽，那么100vw = 750px，即1vw = 7.5px
var pxtoviewport = require('postcss-px-to-viewport'); // 代码中写px编译后转化成vm

var concat = require('gulp-concat-dir');//- 多个文件合并为一个；
var replace = require('gulp-replace');
var processors = [
  pxtoviewport({
    viewportWidth: 750,
    viewportHeight: 1334,
    unitPrecision: 5,
    viewportUnit: 'vw',
    selectorBlackList: [],
    minPixelValue: 1,
    mediaQuery: false
  })
];
gulp.task('sass', function () {
  return gulp.src(['./src/scss/components/**/*.scss', './src/scss/index.scss'])
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(autoprefixer())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(concat({ext: '.css'}))
    .pipe(replace('assets/', ''))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/'))
});

gulp.task('img', function () {
  gulp.src('./src/assets/img/*.{png,jpg,gif,ico}')
    .pipe(imagemin({
      progressive: true, //Boolean类型 默认:false 无损压缩图片
      optimizationLevel: 5, //number类型 默认:3 取值范围:0-7(优化等级)
      interlced: true, //Boolean类型 默认false 隔行扫描gif进行渲染
      multipass: true //Boolean类型 默认false 多次优化svg直到完全优化
    }))
    .pipe(gulp.dest('./lib/img')) //输入到build文件夹下的images文件夹下
})

gulp.task('iconfont', function () {
  return gulp.src('./src/assets/icons/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/icons'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass', 'img', 'iconfont']);
});
