import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class TripPrice extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public gus_price:number

  @column()
  public avarage_gus_on_km:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
