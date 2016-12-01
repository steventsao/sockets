const express = require('express');
const axios = require('axios');
const request = require('request');
const api = require('./api.wire.js');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static(path.resolve('public')));

var indexHtml = fs.readFileSync(path.resolve('index.html')).toString();

var instance = axios.create({
  baseURL: api.channel.GET
});

app.get('/', (req, res) => {
  res.send(indexHtml);
});

app.get('/channel', (req, res) => {
  request.get(api.channel.GET + req.query.name, (err, response) => {
    res.send(response.body);
  });
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
