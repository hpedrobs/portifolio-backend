// internal
import '@config/env'
import messageRoutes from '@routes/messageRoutes'

// external
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors()) 
app.use(express.json())

// Rotas
app.use('/messages',  messageRoutes)

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`O servidor está sendo executado em http://localhost:${PORT}`)
})
