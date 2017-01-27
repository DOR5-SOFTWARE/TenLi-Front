var proxy = require('http-proxy-middleware');

var apiProxy = proxy('/api', {
    target: 'http://localhost:60000',
    changeOrigin: true // for vhosted sites
});

var imagesProxy = proxy('/Images', {
    target: 'http://www.tenli.co.il',
    changeOrigin: true // for vhosted sites
});

module.exports = {
    server: {
        middleware: {
            1: apiProxy,
            2: imagesProxy
        }
    }
};