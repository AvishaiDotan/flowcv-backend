const express = require('express')
const router = express.Router()

const { signup, _isSessionExist } = require('./auth.controller')

router.post('/signup', signup)
router.post('/login', _isSessionExist)

module.exports = router