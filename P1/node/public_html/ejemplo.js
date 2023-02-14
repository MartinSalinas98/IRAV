// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World Node!');
// }).listen(3000);

const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hello World from Node!')
})

app.listen(3000)