import { defineConfig } from '@adonisjs/cors'

/**
 * Options de configuration pour ajuster la politique CORS. Les options suivantes
 * sont documentées sur le site web de la documentation officielle.
 *
 * https://docs.adonisjs.com/guides/security/cors
 */
export default defineConfig({
  enabled: true,
  origin: ['http://localhost:4200'], // URL de votre frontend Angular
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH'],
  headers: true,
  exposeHeaders: [],
  credentials: true,
  maxAge: 90,
})
