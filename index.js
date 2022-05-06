var http = require('http'),
    httpProxy = require('http-proxy');
 var proxy = httpProxy.createProxyServer({});// Creating Custom
 
proxy.on('proxyReq', function(proxyReq, req, res, options) {
  proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
});
 
var server = http.createServer(function(req, res) {
  // You can define here your custom logic to handle the request
  // and then proxy the request.
  proxy.web(req, res, {
    target: 'http://echoapi.cloudapp.net/api',
secure: true,
changeOrigin: true
  });
});
 
console.log("Proxy listening on port 80 ")
server.listen(8080);
