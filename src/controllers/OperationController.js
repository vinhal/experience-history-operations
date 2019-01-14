const Operation = require('../models/Operation')
const Funcionality = require('../models/Funcionality')
const error = require('../utils/ErrorUtil')

module.exports = {
  async index(req, resp) {
    Operation.find({},
      (err, operations) => {
        if(err) return resp.status(400).json(error.operation(err))
        return resp.json(operations)
      })
  },
  async store(req, resp) {
    const { idFuncionality, idAction } = req.body

    const funcionality = await Funcionality.findOne({ idFuncionality })
    if (!funcionality) {
      return resp.status(400).json(error.funcionality_store('Value of ( idFuncionality ) not found.'))
    }
    if (!funcionality.stActions.includes(idAction)) {
      return resp.status(400).json(error.funcionality_store('Value of ( idAction ) not found for this funcionality.'))
    }

    Operation.create(req.body,
      (err, operation) => {
        if (err) return resp.status(400).json(error.operation_store(err))
        return resp.json(operation)
      }
    )
  }
}
