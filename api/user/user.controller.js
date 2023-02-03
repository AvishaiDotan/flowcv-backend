const { _signup, _isLoggedIn } = require('./user.service')

async function signup(req, res) {
    const credentials = {
        username: 'D22222322',
        password: '1223221121221234234',
        email: 'd23222222@gmail.com',
    }//req body
    try {
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