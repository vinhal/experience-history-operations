const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const server = require('http').Server(app)

app.use(cors())
app.use(express.json())
app.use(require('./routes'))

const {
  PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_DATABASE,
} = process.env

const db = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@mongo:27017/${MONGO_DATABASE}?authSource=admin`

mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
})

server.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
})
