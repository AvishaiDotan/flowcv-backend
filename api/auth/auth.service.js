const { sdkAccount, sdkDatabases, sdkClient, sdkUsers, client, account, ID } = require('../../services/appwrite')
const { info, debug, error, warn } = require('../../services/logger.service')

const bcrypt = require('bcrypt');
const SALT_ROUNDS = 10;
async function createUser(credentials) {
    try {
        const { email, username } = credentials
        let { password } = credentials
        
        password = await bcrypt.hash(password, SALT_ROUNDS) 
        const res = await sdkUsers.createBcryptUser("unique()", email, password, username)       
        // const res = await sdkUsers.create("unique()", email, null, '12345678', username)      

        info('Created user', res)
        return res
    } catch (err) {
        error('Failed to create user', err)
        throw new Error(err)
    }
}

async function createSession(email, password) {
    try {
        const res = await account.createPhoneSession('12312312', '+972502202483')

        bcrypt.getRounds()
        info('Created session', res)
        return res
    } catch (err) {
        error('Failed to create session', err)
        throw new Error(err)
    }
}

async function isSessionExist() {
    try {
        const session = await sdkAccount.getSession//account.getSession("current")

        info('Session exists', session)
        return session
    } catch (err) {
        error('Failed to get session', err)
        throw new Error(err)
    }
}

module.exports = {
    createUser,
    createSession,
    isSessionExist

}