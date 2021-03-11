const express = require('express')
const router = express.Router()

const forumController = require('../controllers/forumController')

router.get('/', forumController.index)
router.get('/showbyid', forumController.show)
router.post('/addforum', forumController.store)
router.post('/updateforum', forumController.update)
router.post('/deleteforum', forumController.deleted)
router.delete('/delete', forumController.deletetable)


module.exports = router