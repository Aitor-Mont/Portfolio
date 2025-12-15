/**
 * Rutas de la API de Contacto
 * 
 * Express Router nos permite organizar las rutas en archivos separados.
 * Este archivo define el endpoint POST /api/contact que recibe los datos
 * del formulario, los guarda en MongoDB y envía un email.
 */

const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { sendContactEmail } = require('../config/email');

/**
 * POST /api/contact
 * 
 * Recibe los datos del formulario de contacto:
 * - name: Nombre o empresa del remitente
 * - message: Contenido del mensaje
 * 
 * Respuestas:
 * - 200: Mensaje enviado correctamente
 * - 400: Datos inválidos
 * - 500: Error del servidor
 */
router.post('/', async (req, res) => {
    try {
        const { name, message } = req.body;

        // Validación básica
        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                error: 'El nombre es obligatorio'
            });
        }

        if (!message || !message.trim()) {
            return res.status(400).json({
                success: false,
                error: 'El mensaje es obligatorio'
            });
        }

        // Crear el documento en MongoDB
        const newMessage = new Message({
            name: name.trim(),
            message: message.trim()
        });

        // Guardar en la base de datos
        await newMessage.save();
        console.log('💾 Mensaje guardado en MongoDB:', newMessage._id);

        // Intentar enviar el email
        try {
            await sendContactEmail({ name, message });

            // Actualizar el estado del mensaje
            newMessage.emailSent = true;
            await newMessage.save();

            res.status(200).json({
                success: true,
                message: 'Mensaje enviado correctamente'
            });

        } catch (emailError) {
            // Si falla el email, igual guardamos el mensaje
            console.error('❌ Error al enviar email:', emailError.message);

            res.status(200).json({
                success: true,
                message: 'Mensaje guardado. El email se enviará más tarde.',
                warning: 'No se pudo enviar el email de notificación'
            });
        }

    } catch (error) {
        console.error('❌ Error en POST /api/contact:', error);

        // Si es un error de validación de Mongoose
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(e => e.message);
            return res.status(400).json({
                success: false,
                error: messages.join(', ')
            });
        }

        res.status(500).json({
            success: false,
            error: 'Error interno del servidor'
        });
    }
});

/**
 * GET /api/contact/health
 * 
 * Endpoint de salud para verificar que la API está funcionando
 */
router.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});

module.exports = router;
