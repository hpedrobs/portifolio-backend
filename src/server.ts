// internal
import '@config/env'
import messageRoutes from '@routes/messageRoutes'
import os from 'os'
import '@config/env'

// external
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT ?? 3000
const ORIGIN = process.env.ORIGIN ?? 'http://localhost:3000'

// Configurações do CORS
const corsOptions = {
    origin: ORIGIN,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true
}

app.use(cors(corsOptions))
app.use(express.json())

// Rotas
app.use('/messages',  messageRoutes)

// Função para obter o IP da máquina
const getLocalIP = (): string => {
    const interfaces = os.networkInterfaces()
    for (const interfaceName in interfaces) {
        for (const iface of interfaces[interfaceName]!) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address // Retorna o IP da máquina
            }
        }
    }
    return 'localhost' // Caso não encontre, retorna 'localhost'
}

// Iniciar o servidor
app.listen(PORT, () => {
    const ip = getLocalIP()
    console.log(`O servidor está sendo executado em http://${ip}:${PORT}`)
})
