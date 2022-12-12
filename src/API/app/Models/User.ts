import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Trip from 'App/Models/Trip'

import {
  column,
  beforeSave,
  BaseModel,
  manyToMany,
  ManyToMany,
  computed
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @column()
  public name:string

  @column() 
  public surname:string

  @column()
  public age:number
  
  @manyToMany(() => Trip,{
    pivotForeignKey:'user_id',
    localKey:'id',
    relatedKey: 'id',
    pivotColumns:['number_of_person'],
  })
  public trip: ManyToMany<typeof Trip>
 
  @computed()
  public number_of_person:number
}
