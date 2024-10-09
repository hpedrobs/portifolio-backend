import { Request, Response, NextFunction } from 'express'
import Joi from 'joi'

const messageSchema = Joi.object({
    name: Joi.string().min(1).required().messages({
        'string.empty': `"name" não pode estar vazio`,
        'any.required': `"name" é necessário`
    }),
    email: Joi.string().email().required().messages({
        'string.empty': `"email" não pode estar vazio`,
        'string.email': `"email" deve ser um e-mail válido`,
        'any.required': `"email" é necessário`
    }),
    subject: Joi.string().min(1).required().messages({
        'string.empty': `"subject" não pode estar vazio`,
        'any.required': `"subject" é necessário`
    }),
    message: Joi.string().min(1).required().messages({
        'string.empty': `"message" não pode estar vazio`,
        'any.required': `"message" é necessário`
    })
})

// Middleware de validação
export const validateMessage = (req: Request, res: Response, next: NextFunction): void => {
    const { error } = messageSchema.validate(req.body)

    if (error) {
        res.status(400).json({
            status: 'error',
            message: 'A validação falhou',
            details: error.details.map((detail) => detail.message)
        })
        return
    }

    next()
}
