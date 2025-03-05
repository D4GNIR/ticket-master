# Image de base Node.js
FROM node:18-alpine

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances du projet
RUN npm install

# Copie du reste du projet
COPY . .

# Exposition des ports
EXPOSE 4200

# Commande de démarrage avec le bon script SSR
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"] 