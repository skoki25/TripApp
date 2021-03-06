import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany} from '@ioc:Adonis/Lucid/Orm'
import Trip from 'App/Models/Trip'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public name:string

  @column() 
  public surname:string

  @column()
  public age:number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Trip,{
    pivotForeignKey:'user_id',
    localKey:'id',
    relatedKey: 'id',
    pivotColumns:['number_of_person'],
  })
  public trip: ManyToMany<typeof Trip>
 

  public number_of_person:number
}
