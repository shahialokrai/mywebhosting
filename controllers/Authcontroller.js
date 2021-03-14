const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')
const secret = require('../config')
const validator = require('email-validator')

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
        if (err) {
            res.json({
                error: err
            })
        }

        let user = new User({

            fname: req.body.fname,
            email: req.body.email,
            phone: req.body.phone,
            password: hashedPass,

        })
        user.save().
            then(user => {
                res.json({
                    message: 'User Added Successfully!'
                })
            })
            .catch(error => {
                res.status(400).json({
                    message: 'User with this email already exists.'
                })
               console.log(error)
            })
    })


}

const login = (req, res, next) => {

    var username = req.body.username
    var password = req.body.password
    if (validator.validate(username)) { }


    User.findOne({ $or: [{ email: username }, { phone: username }] })
        .then(user => {
            console.log(user)

            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (err) {
                        res.json({
                            error: err
                        })
                    }
                   else if (result) {
                        let token = jwt.sign({ name: user.name }, config.secret, { expiresIn: '8760h' })
                        res.json({
                            message: 'Login Successful!',
                            token: token
                        })
                    }
                    else {
                        res.json({
                            message: 'Password does not matched!'

                        })
                    }
                })
            }

            else {

                if (validator.validate(username)) {
                    res.send({ message: 'The User ' + username + ' does not exist. Kindly do Regiration first.' });
                } else {
                    res.send({ message: 'The Username ' + username + ' is not a valid email id.' });

                }
            }
      })
}

const logout = (req, res, next) => {
    res.json({
        message: "Logout Successfully!",
        token: null
    })
}
const deleted = (req, res, next) => {
    let userId = req.body.id

    console.log(userId)
    User.findByIdAndRemove(userId)
        .then(() => {
            res.json({
                message: 'User Id: ' + req.body['id'] + 'is deleted Successfully!'

            })

        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
            console.log(error)
        })
}
const update = (req, res, next) => {
    let userId = req.body.id


    let updatedData = {

        fname: req.body.fname,
        phone: req.body.phone

    }

    User.findByIdAndUpdate(userId, { $set: updatedData })
        .then(() => {
            res.json({
                message: 'User ' + req.body['id'] + ' is updated Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
        })
}
const index = (req, res, next) => {
    User.find().then(response => {
        res.json({
            response
        })
    })
        .catch(error => {
            res.json({
                message: 'An error Occured'
            })
        })
}

const show = (req, res, next) => {

    let userId = req.body.id
    console.log(userId)

    User.findById(userId)
        .then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                message: 'An Error Occured'
            })
            console.log(Error)
        })
}

const confirmation = (req, res, next) => { }
const resendToken = (req, res, next) => { }
module.exports = {
    register, login, logout, deleted, update, show, index, confirmation, resendToken
}