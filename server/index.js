const express = require('express');
const fetch = require('isomorphic-fetch');
const CHANNEL = require('./api.wire.js');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/youtube', (req, res) => {
  fetch('http://www.youtube.com')
    .then((data) => {
      res.send(data);
    });
});

app.get('/channel', (req, res) => {
  fetch(CHANNEL.GET)
    .then((data) => {
      res.send(data);
    });
});
// Mimic the following API call to get user ID
// http://johnnythetank.github.io/youtube-channel-name-converter/
// https://www.googleapis.com/youtube/v3/channels?key=AIzaSyDsGZDPI461UR5JvTysAqv7PW7HSzj50KU&forUsername=nigahiga&part=id

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});
