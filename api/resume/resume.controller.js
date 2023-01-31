const { post, put, get, deleteResume  } = require('../../services/appwrite')
const logger = require('../../services/logger.service')

async function getResumes(req, res) {
    try {
        const userId = '63d9314c63add17d11ee' //req.params.id
        const resumes = await get(userId)
        res.json(resumes)
    } catch (err) {
        logger.error('Failed to get resumes', err)
        res.status(500).send({err: `Failed to get resumes`})
    }
}

async function addResume(req, res) {
    try {
        const userId ='av63d9314c63add17d11ee'
        const resume = {}

        const isPosted = await post(userId, resume, true)

        logger.info('Successfully Posted Resume', resume)
        res.send('Successfully Posted Resume')
    } catch (err) {
        logger.error('Failed to post resume', err)
        res.status(500).send({err: `Failed to post resume`})
    }
}

async function updateResume(req, res) {
    try {
        const resume = {_id: '39210ce0-a1a0-11ed-8adf-e5f3ac6492a8', data: 'Shalala'} //req.body
        const userId = '63d9314c63add17d11ee' //req.params.user 

        put(userId, resume)

        logger.info('Successfully Update Resume', resume)
        res.send('Successfully Update resume')
    } catch (err) {
        logger.error('Failed update resume', err)
        res.status(500).send({err: `Failed to update resume`})
    }
}
async function removeResume(req, res) {
    try {
        const userId = '63d9314c63add17d11ee' //req.params.user 
        const resume = '?'

        deleteResume(userId)

        logger.info('Successfully delete Resume', resume)
        res.send('Successfully delete resume')
    } catch (err) {
        logger.error('Failed delete resume', err)
        res.status(500).send({err: `Failed to delete resume`})
    }

}



module.exports = {
    getResumes,
    updateResume,
    addResume,
    removeResume,
    // updateCar,
    // addCarMsg,
    // removeCarMsg
}