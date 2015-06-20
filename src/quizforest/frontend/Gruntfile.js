module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                includePaths: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'assets/css/app.css': ['assets/scss/app.scss']
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            minify: {
                files: {
                    'assets/js/app.min.js': ['assets/js/**/*.js']
                }
            }
        },
        jshint: {
            files: ['assets/js/app.js']
        },
        watch: {
            css: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['sass']
            },
            scripts: {
                files: ['assets/js/**/*.js'],
                tasks: ['uglify', 'jshint']
            }
        }
    });

    // Load the plugin that provides the "sass" task
    grunt.loadNpmTasks('grunt-sass');

    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load the plugin that provides the "JSHint" task
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Load the plugin that provides the "watch" task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'uglify', 'jshint']);
};