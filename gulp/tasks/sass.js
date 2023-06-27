module.exports = ()=>{
    $.gulp.task("style",
    ()=> $.gulp.src($.path.src.style)
    .pipe($.sass())
    .pipe($.gp.autoprefixer())
    .pipe($.gp.groupCssMediaQueries())
    .pipe($.gulp.dest($.path.build.style))
    .pipe($.sass({
        outputStyle: 'compressed'
    }))
    .pipe($.gp.rename({
        suffix: ".min"
    }))
    .pipe($.gulp.dest($.path.build.style)).on("end", $.bs.reload)
    )
}