module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'src/*.js',
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/* <%= pkg.name - pkg.version %> */\n'
            },
            dist: {
                files: {
                    './<%= pkg.name %>.min.js' : ['<%= pkg.name %>.js']
                }
            }
        },
        browserify: {
            dist: {
                files: {
                    './palette.js': ['main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browserify');
    
    grunt.registerTask('default', ['concat', 'browserify', 'uglify']);

};
