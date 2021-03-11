const jwt = require('jsonwebtoken')
const config = require('../config')

const authenticate = (req, res, next) => {
    try {
        //const token = req.params()
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, config.secret)

        req.user = decode
        next()
    }
    catch (error) {
        res.json({
            message: 'Authentication Failed' + error
        })
    }

}

module.exports = authenticate