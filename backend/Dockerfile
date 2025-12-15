# Dockerfile para el Backend
#
# Un Dockerfile es como una "receta" que le dice a Docker
# cómo construir la imagen de tu aplicación.

# Usamos Node.js versión 20 como base (imagen oficial)
FROM node:20-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero package.json y package-lock.json
# Esto permite que Docker cachee las dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código
COPY . .

# Puerto que expone el contenedor
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["npm", "start"]
