const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const FuncionalitySchema = new mongoose.Schema(
{
  idFuncionality: {
    type: String,
    required: true,
    unique: true
  },
  stActions: {
    type: [String],
    required: true,
  },
  stDescFunc: {
    type: String,
    required: true
  }
},
{
  versionKey: false,
},
)

FuncionalitySchema.plugin(uniqueValidator)

module.exports = mongoose.model('Funcionality', FuncionalitySchema)
