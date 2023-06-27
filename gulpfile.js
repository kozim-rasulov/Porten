global.$ = {
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    bs: require("browser-sync").create(),
    sass: require('gulp-sass')(require('node-sass')),
    del: require('del'),
    path: {
        clear: "./app/build/**",
        serverDir: "./app/build",
        build: {
            html: "./app/build/",
            style: "./app/build/style/",
            js: "./app/build/js/",
            img: "./app/build/img/",
            fonts: "./app/build/fonts/"
        },
        src: {
            html: "./app/src/*.{html,pug,jade}",
            style: "./app/src/style/*.*",
            img: "./app/src/img/**/**/*.{png,jpg,jpeg,svg,gif}",
            fonts: "./app/src/fonts/**/**/*.*",
            js: "./app/src/js/common.js"
        },
        watch: {
            html: ["./app/src/*.{html,pug,jade}", "./app/src/view/**/*.{html,pug,jade}"],
            style: "./app/src/style/**/*.*",
            img: "./app/src/img/**/**/*.{png,jpg,jpeg,svg,gif}",
            fonts: "./app/src/fonts/**/**/*.*",
            js: "./app/src/js/**/*.js"
        },
        tasks: require("./gulp/index")

    },
    tasksList: {
        build: ["html", "style", "img", "fonts", "js"],
        default: ["html", "style", "img", "fonts", "js", "watch", "server"]
    }
}

console.log($.gulp);

$.path.tasks.forEach((filePath)=>{
    let x = require(filePath)
    if (typeof(x) == 'function') {
        x();
    }
})

$.gulp.task("build", $.gulp.series("del", $.gulp.parallel($.tasksList.build)))
$.gulp.task("default", $.gulp.parallel($.tasksList.default))
