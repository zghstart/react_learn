const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/api1', {
            target: 'http://localhost:6000',
            pathRewrite: {'^/api1': ''} //去除请求前缀，保证交给后台服务器的是正常请求地址(必须配置)
        }),
    )
}