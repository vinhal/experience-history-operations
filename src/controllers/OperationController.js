const Operation = require('../models/Operation')
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
    Operation.create(req.body,
      (err, operation) => {
        if (err) return resp.status(400).json(error.operation_store(err))
        return resp.json(operation)
      }
    )
  }
}
