var gulp = require('gulp'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename'),
    del = require('del'),
    path = require('path'),
    ts = require("gulp-typescript"),
    sourcemaps = require('gulp-sourcemaps'),
    bsync = require('browser-sync'),
    reload = bsync.reload,
    nodemon = require('gulp-nodemon'),
    sequence = require('run-sequence');

// Create typescript project for compiler
var tsProject = ts.createProject("tsconfig.json");
var sourcespattern = 'src/**/*.{html,xml,json,css,properties}';

gulp.task('default', function() {
    sequence('cleanoutput', ['copyui5resources', 'copysources', 'compilets'], ['browser-sync', 'watch']);
});

// Watch task to watch source file changes
gulp.task('watch', ['browser-sync'], function() {
    gulp.watch("src/**/*.ts", ['compilets']);
    return gulp.watch(sourcespattern, ['copysources']);
});

// Compile typescript files (see ./tsconfig.json)
gulp.task('compilets', function() {
    gutil.log("Compiling Typescript files");
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
    gutil.log("Copying UI5 resources from bower folder to out/resources. Please stand by, this may take a while.");
    return gulp.src('bower_components/openui5-*/resources/**/*')
        .pipe(rename(function(p) {
            var nda = p.dirname.split(/[\\\/]/);
            nda.splice(0, 2);
            p.dirname = nda.length > 0 ? path.join.apply(null, nda) : "";
        }))
        .pipe(gulp.dest('out/resources'));
});

// Copy own sources located in the src folder
gulp.task('copysources', function() {
    gutil.log("Copying source files from src to out. Check sourcepattern in gulpfile if it does not work for your source file.");
    return gulp.src(sourcespattern)
        .pipe(gulp.dest('out'))
        .pipe(reload({ stream: true }));
});

// Clean output folder
gulp.task('cleanoutput', function() {
    return del.sync('out/**/*');
});

// Activates browser sync
gulp.task('browser-sync', ['nodemon'], function() {
    return bsync({
        proxy: "http://localhost:8080"
    });
});

var BROWSER_SYNC_RELOAD_DELAY = 500;

// Nodemon for (nodejs) backend
gulp.task('nodemon', function(cb) {
    var called = false;
    return nodemon({

            // nodemon our expressjs server
            script: 'server.js',

            // watch core server file(s) that require server restart on change
            watch: ['server.js']
        })
        .on('start', function onStart() {
            // ensure start only got called once
            if (!called) { cb(); }
            called = true;
        })
        .on('restart', function onRestart() {
            // reload connected browsers after a slight delay
            reload({ stream: true });
        });
});