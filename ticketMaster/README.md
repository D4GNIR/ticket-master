# TicketMaster

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Docker Commands

### Starting the Application

```bash
# Build and start containers
docker-compose up -d

# Build containers without cache
docker-compose build --no-cache

# Start containers with logs
docker-compose up

# Build and start the containers (as mentioned in initial setup)
docker-compose up --build
```

### Container Management

```bash
# Stop all containers
docker-compose down

# View running containers
docker-compose ps

# View container logs
docker-compose logs

# View real-time logs
docker-compose logs -f
```

### Cleanup Commands

```bash
# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove unused volumes
docker volume prune

# Remove all unused containers, images, volumes, networks
docker system prune -a
```

### Useful Commands

```bash
# Enter a container
docker-compose exec [service-name] bash

# Restart specific service
docker-compose restart [service-name]

# View resource usage
docker stats
```

### Troubleshooting

```bash
# Force rebuild containers
docker-compose up -d --force-recreate

# Stop and remove all containers, volumes, and images
docker-compose down -v --rmi all

# Clean Docker cache
docker builder prune
```

### Important Notes

- Ensure Docker and Docker Compose are installed on your machine
- Run containers from the directory containing `docker-compose.yml`
- Rebuild images with `docker-compose build` after Dockerfile modifications

## Local Development

### Development server

To start a local development server, run:

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Server-Side Rendering (SSR)

To start the SSR server:

```bash
npm run serve:ssr:ticketMaster
```

Navigate to `http://localhost:4000/`.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
