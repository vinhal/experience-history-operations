const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const User = require('../models/User')
const error = require('../utils/ErrorUtil')

function generateJWT(id) {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: 86400 } // 24 hours
  )
}

function verifyJWT(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err || !decodedToken) return reject(err)
      resolve(decodedToken)
    })
  })
}

module.exports = {
  async register(req, resp) {
    const {
      username,
      email,
      password
    } = req.body
    const hashedPassword = bcrypt.hashSync(password, 8)
    
    User.create({
      username,
      email,
      password : hashedPassword
    }, (err, user) => {
      if (err) return resp.status(500).json(error.create_user(err))
      const token = generateJWT(user._id)
      return resp.json({ user, token })
    })
  },

  async login(req, resp) {
    const {
      user,
      password
    } = req.body
    
    User.findOne({ $or: [{ username: user }, { email: user }] },
      (err, user) => {
        if (err) return resp.status(500).json(error.login(err))
        if (!user) return resp.status(404).json(error.login('INVALID_USER'))

        const passwordIsValid = bcrypt.compareSync(password, user.password)
        if (!passwordIsValid) return resp.status(401).json(error.login('INVALID_PASSWORD'))

        const token = generateJWT(user._id)
        return resp.json({ user, token })
      }

    )
  },

  verifyJWT(req, resp, next) {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7, token.length)
    }

    if(token) {
      verifyJWT(token)
      .then((decodedToken) => {
        req.user = decodedToken.data
        next()
      })
      .catch((err) =>{
        resp.status(401).json(error.auth(err))
      })
    } else {
      resp.status(401).json(error.auth('Auth token is not supplied'))
    }
  }

}
