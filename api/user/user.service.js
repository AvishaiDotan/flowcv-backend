const { clientAccount, ID, serverAccount, serverClient } = require('../../services/appwrite')

async function _signup(credentials) {
    try {
        const { email, password, username } = credentials
        
        const res = await clientAccount.create(ID.unique(), email, password, username)  
        console.log("🚀 ~ file: user.service.js:8 ~ _signup ~ res", res)
        const res2 = await clientAccount.createEmailSession(email, password)
        console.log("🚀 ~ file: user.service.js:10 ~ _signup ~ res2", res2)
        

        return res
    } catch (err) { 
        console.log(err)
        throw new Error(err)
    }
}

async function _isLoggedIn() {
    return await serverAccount.get()
}

module.exports = {
    _signup,
    _isLoggedIn
}