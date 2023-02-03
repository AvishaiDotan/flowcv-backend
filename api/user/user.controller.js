const { _signup, _isLoggedIn } = require('./user.service')

async function signup(req, res) {
    try {
        const {credentials} = req.body
        console.log("🚀 ~ file: user.controller.js:6 ~ signup ~ req.body", req.body)
        
        const result = await _signup(credentials)
        res.send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({err: `Failed to get resumes`})
    }
}

async function isLoggedIn(req, res) {
    console.log('hey');
    try {
        const result = await _isLoggedIn()
        console.log(result);
        res.send(result)
    } catch (err) {
        console.log(err)
        throw new Error(err)
    };
}



module.exports = {
    signup,
    isLoggedIn
}