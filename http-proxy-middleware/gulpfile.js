var gulp = require('gulp');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');

gulp.task('serverName', function() {
    connect.server({
        root: ['src'],
        port: 8000,
        livereload: true,
        middleware: function(connect, opt) {
            return [
                proxy('/sysArea/getDistrictList',  {
                    target: 'http://localhost:8080',
                    changeOrigin:true
                })
            ];
        }

    });
});
// root 启动目标
// proxy 代理路径可以设置为'/'则所有请求会被转发到配置的target目录