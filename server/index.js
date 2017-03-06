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
const WebpackDevServer = require('webpack-dev-server');
const models = require('./models')
const webpackDevPort = 3000;


const app = express();
const http = require('http').Server(app);
const io = socket(http);
const db = require('./db')

app.use(bodyParser.json());
app.use(express.static(path.resolve('./')));


new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(webpackDevPort, 'localhost', (err, result) => {
  if (err) {
    return console.log(err)
  }
  console.log('listening at localhost' + webpackDevPort)
})

db.connect(null, function(err) {
    if (err) {
        console.log('Unable to connect to MySQL.')
        process.exit(1)
    } else {

    }
})

models.createTable((err)=> {
    if (err) {
        console.log(err)
        process.exit(1)
    } else {
        console.log('created tubeviz table');
    }
});

models.create(6, 'TED', 'Sunnyvale', (err)=> {
    if (err) {
        console.log(err)
        process.exit(1)
    } else {
        console.log('new user created');
    }
});

var instance = axios.create({
  baseURL: api.channel.GET
});

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.get('/test', (req, res) => {
  res.send('hi')
})

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
