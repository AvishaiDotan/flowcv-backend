const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
app.use(express.json({ limit: '50mb' }))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            'http://localhost:5173'],
        credentials: true
    }
    app.use(cors(corsOptions))
}


const resumeRoute = require('./api/resume/resume.routes')
const authRoutes = require('./api/auth/auth.routes')
const fileRoutes = require('./api/file/file.routes')

app.use('/api/resume', resumeRoute);
app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});