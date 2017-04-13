const http = require('http')
const phrases = require('./data/phrases')

const PORT = 1337
const IP = '127.0.0.1'

const server = http.createServer(function (request, response) {
  console.log('the server heard a request')
  response.end('here is the response')
})

console.log(`firing up the server at ${IP}:${PORT} ...`)
server.listen(PORT, IP)
