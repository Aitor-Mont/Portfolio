/**
 * Modelo de Mensaje de Contacto
 * 
 * Este archivo define la estructura de los datos que se guardarán en MongoDB.
 * Mongoose es un ODM (Object Document Mapper) que nos permite trabajar con
 * MongoDB de forma más sencilla usando esquemas y modelos.
 */

const mongoose = require('mongoose');

// Definimos el esquema (estructura) de un mensaje
const messageSchema = new mongoose.Schema({
    // Nombre o empresa del remitente
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true,           // Elimina espacios al inicio y final
        maxlength: [100, 'El nombre no puede exceder 100 caracteres']
    },

    // Contenido del mensaje
    message: {
        type: String,
        required: [true, 'El mensaje es obligatorio'],
        trim: true,
        maxlength: [5000, 'El mensaje no puede exceder 5000 caracteres']
    },

    // Fecha de creación (se genera automáticamente)
    createdAt: {
        type: Date,
        default: Date.now
    },

    // Estado del email (si se envió correctamente o no)
    emailSent: {
        type: Boolean,
        default: false
    }
});

// Creamos el modelo a partir del esquema
// MongoDB creará una colección llamada 'messages' (plural automático)
const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
