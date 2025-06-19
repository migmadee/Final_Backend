import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import authRoutes from './routes/authRoutes'
import eventRoutes from './routes/eventRoutes'
dotenv.config()

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: '*', // frontend origin
    credentials: true,
  })
)

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/events', eventRoutes)
// 🏠 Root route
app.get('/', (req, res) => {
  res.send(`
    🚀 API is running...
    🌐 Status: Online
    
  `)
})

export default app
