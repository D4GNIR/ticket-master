import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

const dbConfig = defineConfig({
  connection: 'mysql',
  connections: {
    mysql: {
      client: 'mysql2',
      connection: {
        host: env.get('MYSQL_HOST', 'db'),
        port: Number.parseInt(env.get('MYSQL_PORT', '3306'), 10),
        user: env.get('MYSQL_USER', 'ticket_user'),
        password: env.get('MYSQL_PASSWORD', 'ticket_password'),
        database: env.get('MYSQL_DB_NAME', 'ticket_db'),
      },
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})

export default dbConfig
