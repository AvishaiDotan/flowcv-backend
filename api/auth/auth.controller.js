const { createUser, setClientJWT } = require('./auth.service')
const { info, error} = require('../../services/logger.service')

async function signup(req, res) {
    try {
        const {credentials, resume} = req.body        
     
        const user = await createUser(credentials)
        
        const { email, password } = user
        const session = await createSession(email, password)
        
        info('Successfully signed up', credentials)
        res.send(session)
    } catch (err) {
        error('failed to signup', err)
        res.status(500).send({err: `Failed to signup`})
    }
}


async function setJWT(req, res) {
    try {
        const { jwt } = req.body
        setClientJWT(jwt)
    } catch (err) {
        console.log(err);
    }
}



module.exports = {
    signup,
    setJWT
}