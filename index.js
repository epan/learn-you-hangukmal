const express = require('express');
const phrases = require('./data/phrases');

const PORT = 1337;
const IP = '127.0.0.1';
const app = express();

app.use((req, res, next) => {
  console.log(`SERVING: ${req.method} to ${req.url}`);
  next();
});

// serve static assets from /clients
app.use('/client', express.static(__dirname + '/client'));

// serve index.html on GET /
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(PORT, () => {
  console.log(`App is listening to ${IP}:${PORT}`);
});
