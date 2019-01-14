const mongoose = require('mongoose')

const OperationSchema = new mongoose.Schema(
{
  numCnpjCpf: {
    type: String,
    required: true
  },
  numTelefone: {
    type: String,
  },
  idFuncionality: {
    type: String,
    required: true
  },
  idAction: {
    type: String,
    required: true
  },
  stProtocol: {
    type: String
  },
  stIntegrity: {
    type: String,
    required: true
  },
  customerId: {
    type: String,
    required: true
  },
  stObs: {
    type: String
  },
  stSourceSystem: {
    type: String,
  },
  stSegment: {
    type: String,
    required: true,
  },
  dtTime: {
    type: Date,
    default: Date.now()
  }
},
{
  versionKey: false
},
)

module.exports = mongoose.model('Operation', OperationSchema)
