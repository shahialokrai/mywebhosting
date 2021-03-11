const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
router.post('/confirmation', AuthController.confirmation)
router.post('/resend', AuthController.resendToken)

router.get('/', AuthController.index)
router.get('/showbyid', AuthController.show)
router.post('/deleteuser', AuthController.deleted)
router.post('/updateuser', AuthController.update)


module.exports = router