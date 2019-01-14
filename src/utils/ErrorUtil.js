module.exports = {
  store_tool(e) {
    return { 
      error: 'Bad Request',
      message: 'There was a problem registering the tool.',
      description: e
    }
  },
  delete_tool(e) {
    return {
      error: 'Bad Request',
      message: 'There was a problem deleting the tool.',
      description: e
    }
  },
  tool_not_found() {
    return {
      error: 'Wrong Id',
      message: 'There was a problem deleting the tool.',
      description: 'TOOL_NOT_FOUND'
    }
  },
  create_user(e) {
    return {
      error: 'Create User Error',
      message: 'There was a problem creating the user.',
      description: e
    }
  },
  login(e) {
    return {
      error: 'Login Error',
      message: 'There was a problem authenticating the user.',
      description: e
    }
  },
  auth(e) {
    return {
      error: 'Auth Error',
      message: 'Invalid auth token provided.',
      description: e
    }
  },
}