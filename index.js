const http = require('http')
const phrases = require('./data/phrases')

const PORT = 1337
const IP = '127.0.0.1'

const server = http.createServer(function (request, response) {

  if (request.url === '/phrases') {
    // GET /phrases return JSON of all the phrases
    if (request.method === 'GET') {
      response.setHeader('Content-Type', 'application/json;charset=utf-8')
      response.writeHead(200)
      response.end(JSON.stringify(phrases))
    }
    // POST /phrases add a new phrase
    if (request.method === 'POST') {
      // listen for all the data
      // once we have all the data
        // concat chunks together
        // add id to the phrase (using length of phrases array)
        // add phrase to phrase collection

    }

    // GET /phrases:id, get phrase by id
  
  }

  console.log('the server heard a request')
  response.end('here is the response')
})

console.log(`firing up the server at ${IP}:${PORT} ...`)
server.listen(PORT, IP)
