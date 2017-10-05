const express = require('express')
const router = express.Router()
const user = require('../controllers/user-controller')

router.get('/', user.getAllUser)
router.get('/:id', user.getSingleUser)
router.delete('/:id', user.deleteUser)
router.post('/:id', user.updateUser)

module.exports = router
