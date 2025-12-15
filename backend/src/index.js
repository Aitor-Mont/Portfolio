/**
 * Servidor Express - Punto de entrada de la aplicación
 * 
 * Este archivo configura y arranca el servidor Express.
 * Es el primer archivo que se ejecuta cuando inicias el backend.
 */

// Cargar variables de entorno desde el archivo .env
// IMPORTANTE: Esto debe ir ANTES de cualquier otro require
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Importar las rutas
const contactRoutes = require('./routes/contact');

// Crear la aplicación Express
const app = express();

// ============================================
// MIDDLEWARE
// ============================================

/**
 * CORS (Cross-Origin Resource Sharing)
 * 
 * Por defecto, los navegadores bloquean peticiones a dominios diferentes
 * por seguridad. CORS nos permite especificar qué dominios pueden
 * acceder a nuestra API.
 */
app.use(cors({
    origin: function (origin, callback) {
        // Permitir peticiones sin origen (como curl o apps móviles)
        if (!origin) return callback(null, true);

        const allowedOrigins = [
            'http://localhost:5173',
            'http://localhost:3000',
            process.env.FRONTEND_URL
        ];

        // Comprobar si el origen está permitido
        if (allowedOrigins.indexOf(origin) === -1) {
            // En desarrollo, podemos ser más permisivos si es localhost
            if (origin && origin.includes('localhost')) {
                return callback(null, true);
            }
            const msg = 'La política CORS no permite el acceso desde este origen.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST'],
    credentials: true
}));

/**
 * Middleware para parsear JSON
 * 
 * Express no entiende JSON por defecto. Este middleware
 * convierte el body de las peticiones a objetos JavaScript.
 */
app.use(express.json());

/**
 * Middleware de logging
 * 
 * Muestra información sobre cada petición que llega al servidor.
 * Útil para debugging.
 */
app.use((req, res, next) => {
    console.log(`📨 ${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// ============================================
// RUTAS
// ============================================

// Ruta de prueba para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.json({
        message: 'API del Portfolio - Backend de Contacto',
        version: '1.0.0',
        endpoints: {
            health: 'GET /api/contact/health',
            contact: 'POST /api/contact'
        }
    });
});

// Montar las rutas de contacto en /api/contact
app.use('/api/contact', contactRoutes);

// ============================================
// MANEJO DE ERRORES
// ============================================

// Middleware para rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Endpoint no encontrado'
    });
});

// Middleware global de errores
app.use((err, req, res, next) => {
    console.error('❌ Error no manejado:', err);
    res.status(500).json({
        success: false,
        error: 'Error interno del servidor'
    });
});

// ============================================
// CONEXIÓN A MONGODB Y ARRANQUE DEL SERVIDOR
// ============================================

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio';

/**
 * Función principal que conecta a MongoDB y arranca el servidor
 */
const startServer = async () => {
    try {
        // Conectar a MongoDB
        console.log('🔌 Conectando a MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Conectado a MongoDB');

        // Arrancar el servidor
        app.listen(PORT, () => {
            console.log(`
🚀 Servidor iniciado correctamente
📍 URL: http://localhost:${PORT}
📊 Health Check: http://localhost:${PORT}/api/contact/health
      `);
        });

    } catch (error) {
        console.error('❌ Error al iniciar el servidor:', error.message);
        process.exit(1);
    }
};

// Manejar el cierre graceful del servidor
process.on('SIGINT', async () => {
    console.log('\n🛑 Cerrando servidor...');
    await mongoose.connection.close();
    console.log('👋 Desconectado de MongoDB. ¡Hasta pronto!');
    process.exit(0);
});

// ¡Iniciar el servidor!
startServer();
