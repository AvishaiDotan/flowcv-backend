const express = require('express')
const router = express.Router()

const { getResumes } = require('./resume.controller')


router.get('/all/:id', getResumes);

// router.get('/:id', getCarById)
// router.post('/', requireAuth, addCar)
// router.put('/:id', requireAuth, updateCar)
// router.delete('/:id', requireAuth, removeCar)

module.exports = router