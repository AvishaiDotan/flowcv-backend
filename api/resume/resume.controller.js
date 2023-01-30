const logger = require('../../services/logger.service')

async function getResumes(req, res) {
    try {
        const userId = req.params.id
        const resumes = `Array of resumes objects ${userId}`
        res.json(resumes)
    } catch (err) {
        logger.error('Failed to get resumes', err)
        res.status(500).send({err: `Failed to get resumes`})
    }
}

module.exports = {
    getResumes,
    // getCarById,
    // addCar,
    // updateCar,
    // removeCar,
    // addCarMsg,
    // removeCarMsg
}