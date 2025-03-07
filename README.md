# docker

## Construire et démarrer les conteneurs

docker-compose up --build

## Démarrer les conteneurs sans rebuild

docker-compose up

## Arrêter les conteneurs

docker-compose down

## Voir les logs

docker-compose logs -f

## Voir les conteneurs en cours d'exécution

docker ps

# adonis

## Lancer les migrations

docker-compose exec backend node ace migration:run

## Status des migrations

docker-compose exec backend node ace migration:status

## Annuler la dernière migration

docker-compose exec backend node ace migration:rollback

## Réinitialiser la base et relancer toutes les migrations

docker-compose exec backend node ace migration:fresh

## Lancer les seeders (si vous en avez)

docker-compose exec backend node ace db:seed

## Lister les tables

docker-compose exec backend node ace list:tables

# BDD

## Se connecter directement à la base de données MySQL

docker-compose exec db mysql -u ticket_user -p ticket_master

## (le mot de passe sera celui défini dans vos variables d'environnement)

# Autres

## Accéder au shell du conteneur backend

docker-compose exec backend sh

## Installer une nouvelle dépendance npm

docker-compose exec backend npm install <package-name>

## Voir les logs du backend uniquement

docker-compose logs -f backend
