module.exports = function (grunt) {
    var moduleName = 'ui';
    var loadConfig = function (name, module) {
        var result = {};
        module = module || moduleName || 'module';
        name = name.indexOf('.') > -1 ? name : name + '.conf';
        result[module] = require('./config/' + name + '.js');
        return result;
    };

    grunt.initConfig({
        webpack: {
            default: loadConfig('webpack')['ui'],
            cashstack: loadConfig('webpack-cashstack')['ui'],
            docs: loadConfig('webpack-docs')['ui'],
        },
        watch: loadConfig('watch'),
        karma: loadConfig('karma'),
        eslint: loadConfig('eslint'),
    });

    grunt.registerTask('docs', ['webpack:docs']);
    grunt.registerTask('build', ['webpack:default', 'webpack:cashstack', 'docs']);
    grunt.registerTask('test', ['karma']);

    grunt.registerTask('default', ['build']);

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-cli'],
    });
};
