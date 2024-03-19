// Create a proxy server with logging and error handling
const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

// Error handling
proxy.on('error', (err, req, res) => {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  res.end('Something went wrong. Please try again.');
});

// Logging
proxy.on('proxyReq', (proxyReq, req, res) => {
  console.log(`Proxying request to: ${proxyReq.path}`);
});

// Create an HTTP server
http.createServer((req, res) => {
  proxy.web(req, res, { target: 'http://localhost:8000' });
}).listen(9000);

console.log('Proxy server running at http://localhost:9000');
