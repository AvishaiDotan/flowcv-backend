const express = require('express')
const router = express.Router()

const { getResumes, addResume, updateResume } = require('./resume.controller')

router.get('/all/:id', getResumes)
router.put('/:id', updateResume)
router.post('/', addResume)

// router.get('/:id', getCarById)
// router.post('/', requireAuth, addCar)
// router.delete('/:id', requireAuth, removeCar)

module.exports = router