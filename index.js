var url = require('url');
var proxy = require('proxy-middleware');
var browserSync = require('browser-sync');
// The secondary (sub-domain) you want to proxy
var proxyOptions = url.parse('http://localhost:8080');
// The route you want to proxy (anything that starts with /custom-app will point to 8080 instead of 40636)
proxyOptions.route = '/custom-app';

browserSync.init({
    proxy: {
        target: "localhost:40636", // The "main" domain
        middleware: proxy(proxyOptions)
    },
    open: false
});