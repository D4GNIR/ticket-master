# Image de base Node.js
FROM node:20-alpine

# Définition du répertoire de travail
WORKDIR /app

# Ajout d'une configuration pour le cache npm
RUN npm config set cache /app/.npm-cache --global

# Installation des dépendances globales avec une version spécifique
RUN npm install -g @angular/cli@19.2.0

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances du projet
RUN npm install

# Copie du reste du projet
COPY . .

# Exposition des ports
EXPOSE 4200
EXPOSE 4000

# Commande de démarrage avec le bon script SSR
CMD ["npm", "run", "serve:ssr:ticketMaster"] 