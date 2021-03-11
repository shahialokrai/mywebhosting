const express = require('express')
const router = express.Router()

const categoryController = require('../controllers/categoryController')

router.get('/', categoryController.index)
router.post('/addcategory', categoryController.store)
router.post('/updatecategory', categoryController.update)
router.post('/deletecategory', categoryController.deleted)
router.delete('/delete', categoryController.deletetable)


module.exports = router