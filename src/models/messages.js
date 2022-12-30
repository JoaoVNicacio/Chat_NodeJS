const mongoose = require('mongoose')

// Creating a schema for the messages:
const messageSchema = new mongoose.Schema({
  name: String,
  message: String,
},
{
  timestamps: true,
})

// Creating the message model with the schema: 
const Message = mongoose.model('Messages', messageSchema)

module.exports = Message