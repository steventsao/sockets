const express = require('express');
const axios = require('axios');
const request = require('request');
const api = require('./api.wire.js');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const socket = require('socket.io')
const config = require('../webpack.config.js');
const webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');


const app = express();
const http = require('http').Server(app);
const io = socket(http);

app.use(bodyParser.json());
app.use(express.static(path.resolve('public')));


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(2000, 'localhost', (err, result) => {
  if (err)
    return console.log(err)
  console.log('listening at localhost:2000')
})
// var indexHtml = fs.readFileSync(path.resolve('index.html')).toString();

var instance = axios.create({
  baseURL: api.channel.GET
});

app.get('/', (req, res) => {
  res.send(`
  <!doctype html>
    <html>
      <head>
        <title>Socket.IO chat</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font: 13px Helvetica, Arial; }
          form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
          form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
          form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
          #messages { list-style-type: none; margin: 0; padding: 0; }
          #messages li { padding: 5px 10px; }
          #messages li:nth-child(odd) { background: #eee; }
        </style>
      </head>
      <body>
        <ul id="messages"></ul>
        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>
        <script src="/socket.io/socket.io.js"></script>
        <script>
          var socket = io();
        </script>
      </body>
    </html>`);
});

app.get('/channel', (req, res) => {
  request.get(api.channel.GET + req.query.name, (err, response) => {
    res.send(response.body);
  });
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(3000, () => {
  console.log('App is listening on port 3000');
});
