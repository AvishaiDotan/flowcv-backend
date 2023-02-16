const express = require('express')
const router = express.Router()

const { uploadFile } = require('./file.controller')

router.post('/upload', uploadFile)

module.exports = router