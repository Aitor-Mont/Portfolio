/**
 * Configuración del servicio de Email
 * 
 * Nodemailer es una librería que nos permite enviar emails desde Node.js.
 * Usamos Gmail como servidor SMTP, pero podrías usar otros como SendGrid, Mailgun, etc.
 */

const nodemailer = require('nodemailer');

/**
 * Crea un "transporter" - el objeto que se encarga de enviar emails
 * Configurado para usar Gmail SMTP
 */
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',           // Gmail tiene configuración predefinida
        auth: {
            user: process.env.EMAIL_USER,  // Tu email de Gmail
            pass: process.env.EMAIL_PASS   // Contraseña de aplicación (NO tu contraseña normal)
        }
    });
};

/**
 * Envía un email con los datos del formulario de contacto
 * 
 * @param {Object} contactData - Datos del formulario
 * @param {string} contactData.name - Nombre del remitente
 * @param {string} contactData.message - Mensaje
 * @returns {Promise} - Promesa que resuelve cuando el email se envía
 */
const sendContactEmail = async (contactData) => {
    const transporter = createTransporter();

    // Configuramos el contenido del email
    const mailOptions = {
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,  // Remitente
        to: process.env.EMAIL_TO,                                   // Destinatario (tú)
        subject: `📬 SOLICITUD DE CONTACTO - ${contactData.name}`,  // Asunto

        // Versión texto plano
        text: `
Nueva solicitud de contacto desde tu portfolio:

Nombre/Empresa: ${contactData.name}

Mensaje:
${contactData.message}

---
Enviado el: ${new Date().toLocaleString('es-ES')}
    `,

        // Versión HTML (se muestra si el cliente de correo lo soporta)
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">📬 Nueva Solicitud de Contacto</h2>
        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px;">
          <p><strong>Nombre/Empresa:</strong> ${contactData.name}</p>
          <hr style="border: 1px solid #e2e8f0;">
          <p><strong>Mensaje:</strong></p>
          <p style="white-space: pre-wrap;">${contactData.message}</p>
        </div>
        <p style="color: #64748b; font-size: 12px; margin-top: 20px;">
          Enviado el: ${new Date().toLocaleString('es-ES')}
        </p>
      </div>
    `
    };

    // Enviamos el email
    const info = await transporter.sendMail(mailOptions);
    console.log('📧 Email enviado:', info.messageId);

    return info;
};

module.exports = { sendContactEmail };
