const express = require('express')
const router = express.Router()

const ReplyController = require('../controllers/replyController')

router.get('/', ReplyController.index)
router.get('/showbyid', ReplyController.show)
router.post('/addreply', ReplyController.store)
router.post('/updatereply', ReplyController.update)
router.post('/deletereply', ReplyController.deleted)
router.delete('/delete', ReplyController.deletetable)


module.exports = router