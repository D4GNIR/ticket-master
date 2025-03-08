import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import hash from '@adonisjs/core/services/hash'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Ticket from './ticket.js'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare email: string

  @column({ serializeAs: null })
  declare password: string

  @column()
  declare name: string

  @column()
  declare role: string

  @column()
  declare rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Ticket, {
    foreignKey: 'createdBy',
  })
  declare tickets: HasMany<typeof Ticket>

  @hasMany(() => Ticket, {
    foreignKey: 'assignedTo',
  })
  declare assignedTickets: HasMany<typeof Ticket>

  static async verifyCredentials(email: string, password: string) {
    const user = await this.findByOrFail('email', email)
    await hash.verify(user.password, password)
    return user
  }
}
