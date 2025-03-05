import { defineConfig } from '@adonisjs/cors'

/**
 * Options de configuration pour ajuster la politique CORS. Les options suivantes
 * sont documentées sur le site web de la documentation officielle.
 *
 * https://docs.adonisjs.com/guides/security/cors
 */
const corsConfig = defineConfig({
  enabled: true,
  origin: true,
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE'],
  headers: true,
  exposeHeaders: [],
  credentials: true,
  maxAge: 90,
})

export default corsConfig
