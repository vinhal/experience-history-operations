const express =  require('express')

const routes = express.Router()

const ToolsController = require('./controllers/ToolsController')
const AuthController = require('./controllers/AuthController')

routes.post('/register', AuthController.register)
routes.post('/login', AuthController.login)

routes.get('/tools', ToolsController.index)
routes.post('/tools', AuthController.verifyJWT, ToolsController.store)
routes.delete('/tools/:id', AuthController.verifyJWT, ToolsController.delete)


module.exports = routes
