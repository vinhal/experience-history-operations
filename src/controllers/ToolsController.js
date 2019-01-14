const Tool = require('../models/Tool')
const error = require('../utils/ErrorUtil')

module.exports = {
  async index(req, resp) {   
    const { title, tag } = req.query
		const filters = {}

    tag ? filters.tags = tag : null
    title ? filters.title = title.toLowerCase() : null
    
    const tools = await Tool.find(filters)
    return resp.json(tools)
  },

  async store(req, resp) {
    Tool.create(req.body,
      (err, tool) => {
        if (err) return resp.status(400).json(error.store_tool(err))
        return resp.json(tool)
      }
    )
  },

  async delete(req, resp) {
    Tool.deleteOne({ '_id': req.params.id },
      (err, tool) => {
        if (err) resp.status(400).json(error.delete_tool(err))
        return tool.n > 0
        ? resp.json({})
        : resp.status(404).json(error.tool_not_found)
      }
    )
  }
}
