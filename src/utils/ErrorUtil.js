module.exports = {
  operation(e) {
    return { 
      error: 'Bad Request',
      message: 'There was a problem listing the operation.',
      description: e
    }
  },
  operation_store(e) {
    return { 
      error: 'Bad Request',
      message: 'There was a problem registering the operation.',
      description: e
    }
  },

  funcionality(e) {
    return { 
      error: 'Bad Request',
      message: 'There was a problem listing the funcionality.',
      description: e
    }
  },
  funcionality_store(e) {
    return { 
      error: 'Bad Request',
      message: 'There was a problem registering the funcionality.',
      description: e
    }
  },

  action(e) {
    return { 
      error: 'Bad Request',
      message: 'There was a problem listing the action.',
      description: e
    }
  },
  action_store(e) {
    return { 
      error: 'Bad Request',
      message: 'There was a problem registering the action.',
      description: e
    }
  },
}