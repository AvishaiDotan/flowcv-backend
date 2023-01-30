const express = require('express')
const app = express()

const resumeRoute = require('./api/resume/resume.routes')

app.use('/api/resume', resumeRoute);


app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});