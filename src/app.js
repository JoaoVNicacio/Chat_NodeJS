const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const messagesRoute = require('./routes/messagesRoute')

const port = 3000
const address = 'http://localhost:'

app.use(express.static('front-end'))

// Setting the requests body to json and url-encoded:
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Loading the messages route:
messagesRoute(app, io)

// Lauching the server:
const server = http.listen(port, () => {
  console.log(`Server is running in: ${address}${server.address().port}`)
})


