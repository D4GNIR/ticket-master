import { ApplicationService } from '@adonisjs/core/types'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    // Register your own bindings
  }

  async boot() {
    // IoC container is ready
  }
}

export const providers = [() => import('@adonisjs/cors/cors_provider')]
