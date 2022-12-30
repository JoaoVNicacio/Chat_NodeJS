const mongoose = require('../db')
const Message = require('../models/messages')

// Messages Routes and Methods:
const messagesRoute = (app, io) => {

  // GET:
  app.route('/messages').get((req, res) => {

    Message.find({}, (err, messages) => {
      res.send(messages)

    })
  })

  // GET with the username:
  app.route('/messages/:user').get((req, res) => {

    Message.find({}, (err, messages) => {
      res.send(messages)

    })
  })

  // POST:
  app.route('/messages').post((req, res) => {

    const message = new Message(req.body)

    message.save().then((err) => {

      console.log(message)
      // Socket.io emit for refreshing the messages automatically on send:
      io.emit('message', req.body)
      res.sendStatus(200)

      // Catch error:
    }).catch((err) => {
      res.sendStatus(500)
    })
  })


  // Notify an user connection:
  io.on('connection', (socket) => {
    console.log('A user conected')
  })

}

module.exports = messagesRoute