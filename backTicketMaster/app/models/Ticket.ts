import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import TicketStatus from './ticket_status.js'

export default class Ticket extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare description: string

  @column()
  declare statusId: number

  @column()
  declare createdBy: number

  @column()
  declare assignedTo: number | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'createdBy',
  })
  declare creator: BelongsTo<typeof User>

  @belongsTo(() => User, {
    foreignKey: 'assignedTo',
  })
  declare assignee: BelongsTo<typeof User>

  @belongsTo(() => TicketStatus, {
    foreignKey: 'statusId',
  })
  declare status: BelongsTo<typeof TicketStatus>
}
