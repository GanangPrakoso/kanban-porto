const express = require('express')
const router = express.Router()
const userController = require ('../controllers/usersController')
const authentication = require('../middlewares/authentication')

router.get('/', authentication, userController.getAll)
router.post('/register', userController.register)
router.post('/login', userController.login)

module.exports = router