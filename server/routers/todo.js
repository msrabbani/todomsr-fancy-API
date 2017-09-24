const express = require('express')
const router = express.Router()

const todo = require('../controllers/todo-controller')
const auth = require('../controllers/auth-controller')

router.post('/', auth.authUser, todo.createTodo)
router.get('/', auth.authUser, todo.getAllTodo)
router.get('/:id', auth.authUser, todo.getSingleTodo)
router.delete('/:id', auth.authUser, todo.deleteTodo)
router.put('/:id', auth.authUser, todo.updateTodo)

module.exports = router
