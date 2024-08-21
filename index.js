import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { RootRouterV1 } from './src/routes/index.js'

dotenv.config()

mongoose.connect(process.env.MONGODB_URI)

const app = express()
const PORT = 8080

app.use(express.json())

app.use('/api/v1/', RootRouterV1)

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
