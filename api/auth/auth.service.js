const { client, account, ID } = require('../../services/appwrite')
const { info, error } = require('../../services/logger.service')

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;

async function createUser(credentials) {
    try {
        const { email, username } = credentials
        let { password } = credentials
        
        password = await bcrypt.hash(password, SALT_ROUNDS) 
        // const res = await sdkUsers.createBcryptUser("unique()", email, password, username)           

        info('Created user', res)
        return res
    } catch (err) {
        error('Failed to create user', err)
        throw new Error(err)
    }
}

function setClientJWT(jwt) {
    client.setJWT(jwt)
    info('Setting client JWT', client)
}


module.exports = {
    createUser,
    setClientJWT
}