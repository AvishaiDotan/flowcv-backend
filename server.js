const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const resumeRoute = require('./api/resume/resume.routes')
const userRoutes = require('./api/user/user.routes')

app.use('/api/resume', resumeRoute);
app.use('/api/user', userRoutes);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});