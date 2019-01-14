const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema(
{
  username: {
    type: String,
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
    unique: true
  },
},
{
  versionKey: false
},
)

UserSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', UserSchema)
