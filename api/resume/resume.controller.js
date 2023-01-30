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

async function addResume(req, res) {
    try {
        const resume = req.body
        console.log('Added resume to resume array', resume);
        res.send('Successfully added resume')
    } catch (err) {
        logger.error('Failed to get resume', err)
        res.status(500).send({err: `Failed to get resume`})
    }

}

async function updateResume(req, res) {
    try {
        const resume = req.body
        const { id } = req.params
        console.log('Update resume', id, resume);
        res.send('Successfully Updated resume')
    } catch (err) {
        logger.error('Failed to get resume', err)
        res.status(500).send({err: `Failed to get resume`})
    }

}



module.exports = {
    getResumes,
    updateResume,
    addResume,
    // updateCar,
    // removeCar,
    // addCarMsg,
    // removeCarMsg
}