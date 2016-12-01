const express = require('express');
const fetch = require('isomorphic-fetch');
const api = require('./api.wire.js');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.resolve('public')));

var indexHtml = fs.readFileSync(path.resolve('index.html')).toString();

app.get('/', (req, res) => {
  res.send(indexHtml);
});

app.get('/channel', (req, res) => {
  fetch(api.channel.GET)
    .then(response => res.send(response));
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
