const express = require('express')
const router = express.Router()

const { signup, isLoggedIn } = require('./user.controller')

router.post('/signup', signup)
router.get('/isLoggedIn', isLoggedIn)

module.exports = router