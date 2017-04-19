const express = require('express');
const logger = require('./middleware/logger');
const Phrases = require('./middleware/phraseHandlers');

const PORT = 1337;
const IP = '127.0.0.1';
const app = express();

// Use logger middleware
app.use(logger);

// serve static assets from /clients
app.use('/client', express.static(__dirname + '/client'));

// GET /phrases
app.get('/phrases', Phrases.getAll);

// serve index.html on GET /
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.listen(PORT, () => {
  console.log(`App is listening to ${IP}:${PORT}`);
});
