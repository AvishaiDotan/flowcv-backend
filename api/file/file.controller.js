const cloudinary = require('cloudinary').v2

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

async function uploadFile(req, res) {
    try {
        const file = req.body.file
        const img = await cloudinary.uploader.upload(file, { width: 500 })
        return res.json(img.url)
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    uploadFile
}