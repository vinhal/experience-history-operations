const express =  require('express')

const routes = express.Router()

const FuncionalityController = require('./controllers/FuncionalityController')
const OperationController = require('./controllers/OperationController')

routes.get('/funcionality', FuncionalityController.index)
routes.post('/funcionality', FuncionalityController.store)

routes.get('/operation', OperationController.index)
routes.post('/operation', OperationController.store)


module.exports = routes
