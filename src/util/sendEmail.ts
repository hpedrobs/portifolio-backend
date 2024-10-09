// external
import nodemailer from 'nodemailer'

// internal
import '@config/env'

function MountHtmlBody(name: string, email: string, subject: string, message: string) {
    // Corpo HTML aprimorado para o e-mail
    return `
        <div style="font-family: Arial, sans-serif; color: #333;">
            <table style="max-width: 600px; margin: 0 auto; border-collapse: collapse;">
                <thead>
                    <tr>
                    <th style="background-color: #003C3C; color: #FFFFFF; padding: 20px; text-align: center;">
                    <h1 style="margin: 0; font-size: 24px;">Nova Mensagem do Seu Portfólio Pessoal</h1>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 20px;">
                            <p style="font-size: 16px;">Olá Pedro,</p>
                            <p style="font-size: 16px;">Você recebeu uma nova mensagem de um cliente que visitou o seu portfólio pessoal.</p>
                            
                            <h3 style="color: #003C3C;">Detalhes do Cliente:</h3>
                            <ul style="font-size: 16px; list-style-type: none; padding: 0;">
                                <li><strong>Nome:</strong> ${name}</li>
                                <li><strong>Email:</strong> ${email}</li>
                                <li><strong>Assunto:</strong> ${subject}</li>
                            </ul>
                            
                            <h3 style="color: #003C3C;">Mensagem:</h3>
                            <p style="font-size: 16px; background-color: #f4f4f4; padding: 15px; border-radius: 5px;">${message}</p>
                            
                            <p style="font-size: 16px;">Certifique-se de responder o mais breve possível.</p>
                            
                            <p style="font-size: 16px;">Atenciosamente,<br>Seu Portfólio Pessoal</p>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td style="background-color: #003C3C; color: #FFFFFF; padding: 10px; text-align: center;">
                            <p style="margin: 0; font-size: 12px;">&copy; 2024 Pedro Henrique | Developer Full-Stack</p>
                            <p style="margin: 0; font-size: 12px;">Desenvolvido com paixão por Pedro Henrique</p>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    `
}

/**
 * Função para enviar e-mail
 * Como chamar a função para enviar o e-mail:
 * sendEmail('Thiago', 'thiago@gmail.com', 'Orçamento', 'Olá, Pedro! Vim através do seu site oficial, podemos conversar?')
*/
export function sendEmail(name: string, email: string, subject: string, message: string) {
    return new Promise(async (resolve, reject) => {
        const html = MountHtmlBody(name, email, subject, message)
        // Configurar o transporte do e-mail
        const transporter = nodemailer.createTransport({
            host: 'smtp.hostinger.com', // Servidor SMTP da Hostinger
            port: 465, // Porta segura SSL
            secure: true, // Usar SSL
            auth: {
                user: process.env.SMTP_EMAIL, // Seu e-mail na Hostinger
                pass: process.env.SMTP_PASSWORD, // Sua senha do e-mail
            },
        })
    
        // Opções de envio do e-mail
        const mailOptions = {
            from: `"${name}" <contato@hpedrobs.com>`, // Endereço do remetente
            to: process.env.SMTP_DESTS, // Lista de destinatários
            subject: 'Assunto do E-mail', // Assunto do e-mail
            html, // Corpo do e-mail em HTML
        }
    
        // Enviar o e-mail
        try {
            const info = await transporter.sendMail(mailOptions)
            resolve(`E-mail enviado: ${info.messageId}`)
        } catch (error) {
            reject(`Erro ao enviar e-mail: ${error}`)
        }
    })
}

export default sendEmail
