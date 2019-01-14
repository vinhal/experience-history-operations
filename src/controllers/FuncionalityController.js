const Funcionality = require('../models/Funcionality')
const error = require('../utils/ErrorUtil')

module.exports = {
  async index(req, resp) {
    Funcionality.find({},
      (err, funcionalities) => {
        if(err) return resp.status(400).json(error.funcionality(err))
        return resp.json(funcionalities)
      })
  },

  async store(req, resp) {
    Funcionality.create(req.body,
      (err, funcionality) => {
        if (err) return resp.status(400).json(error.funcionality_store(err))
        return resp.json(funcionality)
      }
    )
  }
}
