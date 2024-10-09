// external
import { Request, Response } from 'express'
import sendEmail from '@util/sendEmail'

export function sendMessage(req: Request, res: Response): void {
    const { name, email, subject, message } = req.body

    sendEmail(name, email, subject, message)
        .then(() => {
            res.status(200).send(`Olá, ${name}! Agradeço pelo seu contato. Sua mensagem foi recebida com sucesso e retornarei o mais breve possível. Desde já, obrigado por se comunicar comigo!`)
        })
        .catch(err => console.error(err))
}
    