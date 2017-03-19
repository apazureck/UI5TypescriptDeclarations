var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    del = require('del'),
    path = require('path'),
    ts = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    bsync = require('browser-sync'),
    reload = bsync.reload,
    nodemon = require('gulp-nodemon');

// Create typescript project for compiler
var tsProject = ts.createProject("tsconfig.json");
var sourcespattern = 'src/**/*.{html,xml,json,css}';

gulp.task('default', ['copyui5resources', 'copysources', 'compilets', 'browser-sync', 'watch']);

// Watch task to watch source file changes
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch("src/**/*.ts", ['compilets']);
    gulp.watch("sourcespattern", ['copysources']);
});

// Compile typescript files (see ./tsconfig.json)
gulp.task('compilets', function() {
    res = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return res.js
        .pipe(sourcemaps.write('.', {
            // Return relative source map root directories per file.
            sourceRoot: function(file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
            }
        }))
        .pipe(gulp.dest('out'))
        .pipe(reload({ stream: true }));
});

// Copies all resource files needed from the bower folder to the output folder
gulp.task('copyui5resources', function() {
    gulp.src('bower_components/openui5-*/resources/**/*')
        .pipe(rename(function(p) {
            var nda = p.dirname.split(/[\\\/]/);
            nda.splice(0, 2);
            p.dirname = nda.length > 0 ? path.join.apply(null, nda) : "";
        }))
        .pipe(gulp.dest('out/resources'));
});

// Copy own sources located in the src folder
gulp.task('copysources', function() {
    gulp.src(sourcespattern)
        .pipe(gulp.dest('out'))
        .pipe(reload({ stream: true }));
});

// Clean output folder
gulp.task('cleanoutput', function() {
    return del.sync('out/**/*');
});

// Activates browser sync
gulp.task('browser-sync', ['nodemon'], function() {
    bsync({
        proxy: "http://localhost:8080"
    });
});

// Nodemon for (nodejs) backend
gulp.task('nodemon', function(cb) {
    var callbackCalled = false;
    return nodemon({ script: './server.js', watch: 'out/**/*' }).on('start', function() {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    }).on('restart', function() {
        setTimeout(function() {
            reload();
        }, 500);
    });
});