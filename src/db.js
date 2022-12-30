const mongoose = require('mongoose')

// Connection URL:
const dbUrl = 'mongodb+srv://admin:admin@node-chatapp.whhodi5.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false)

// Connecting to the database in Mongo Atlas:
mongoose.connect(dbUrl, (err) => {
  console.log('Connection to MongoDB:', err)
})

module.exports = mongoose