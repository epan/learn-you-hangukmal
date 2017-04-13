const http = require('http')
const fs = require('fs')

const phrases = require('./data/phrases')

const PORT = 1337
const IP = '127.0.0.1'

const server = http.createServer((request, response) => {
  console.log(`SERVING ${request.method} to ${request.url}`)

  if (request.url === '/phrases') {

    // GET /phrases return JSON of all the phrases
    if (request.method === 'GET') {
      response.setHeader('Content-Type', 'application/json;charset=utf-8')
      response.writeHead(200)
      response.end(JSON.stringify(phrases))
    }

    // POST /phrases add a new phrase
    if (request.method === 'POST') {
      let data = ''
      
      request.on('data', function (chunk) {
        data += chunk
      })

      request.on('end', function () {
        let newPhrase = JSON.parse(data)
        newPhrase.id = phrases.length
        phrases.push(newPhrase)

        // close out response cycle
        response.writeHead(201)
        response.end(`Added ${newPhrase.korean}`)
      })

    }

    // GET /phrases:id, get phrase by id
    
  // GET /, serve up index.html
  } else if (request.url === '/' && request.method === 'GET') {
    fs.readFile(__dirname + '/client/index.html', (err, data) => {
      if (err) { console.error(err) }

      response.setHeader('Content-Type', 'text/html;charset=utf-8')
      response.writeHead(200)
      response.end(data)
    })
  } else if (request.url === '/client/app.js' && request.method === 'GET') {
    fs.readFile(__dirname + '/client/app.js', (err, data) => {
      if (err) { console.error(err) }

      response.setHeader('Content-Type', 'application/javascript;charset=utf-8')
      response.writeHead(200)
      response.end(data)
    })
  } else {
    console.log('the server heard a request')
    response.end('here is the response')
  }
  
})

console.log(`firing up the server at ${IP}:${PORT} ...`)
server.listen(PORT, IP)
