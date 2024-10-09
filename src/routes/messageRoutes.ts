// external
import { Router } from 'express'

// internal
import { sendMessage } from '@controllers/messageController'
import { validateMessage } from '@middleware/messageValidationMiddleware'

const router = Router()

// Definindo as rotas
router.post('/sendMessage', validateMessage, sendMessage)

export default router
