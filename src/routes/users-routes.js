const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users-controller')

router.get('/users', usersController.index)
router.get('/users/:id', usersController.show)
router.post('/users', usersController.create)
router.put('/users/:id', usersController.update)
router.delete('/users/:id', usersController.delete)

module.exports = router


