import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Trip from 'App/Models/Trip'

export default class TripType extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Trip)
  public trips:HasMany<typeof Trip>

  @column()
  public type: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
