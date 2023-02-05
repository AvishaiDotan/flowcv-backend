const express = require('express')
const router = express.Router()

const { signup, setJWT } = require('./auth.controller')

router.post('/setJWT', setJWT)
router.post('/signup', signup)

module.exports = router