/* Gruntfile.js */

module.exports = function(grunt) {

    // carga el plugin de Jasmine para Grunt
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    
    // configura las tareas de Grunt
    grunt.initConfig({
        
        // obtiene la información del package.json
        pkg: grunt.file.readJSON('package.json'),

        // configura las pruebas en jasmine
        jasmine: {
            test: {
                src: 'scripts/*.js',
                options: {
                    vendor: [
                        'bower_components/jquery/dist/jquery.js',
                        'bower_components/jasmine-jquery/lib/jasmine-jquery.js'
                    ],
                    specs: 'test/*.spec.js'
                }
            }
        }
    });

};
