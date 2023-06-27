module.exports = ()=>{
    $.gulp.task("watch", () => {
        for (const key in $.path.watch) {
            let path = $.path.watch[key];
            $.gulp.watch(path, $.gulp.series(key))
        }
    }
    )
} 