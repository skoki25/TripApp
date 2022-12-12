import { DateTime} from 'luxon'
import { BaseModel, column,manyToMany,ManyToMany,belongsTo,BelongsTo} from '@ioc:Adonis/Lucid/Orm'
import TripType from './TripType'
import TripPrice from './TripPrice'
import User from './User'

export default class Trip extends BaseModel {

  @belongsTo(() => TripType,{
    foreignKey:'trip_type_id'
  })
  public typTrip: BelongsTo<typeof TripType>

  @belongsTo(() => TripPrice, {
    foreignKey:'trip_price_id'
  })
  public tripPrice: BelongsTo<typeof TripPrice>

  @manyToMany(() => User,{
    localKey:'id',
    pivotForeignKey:'trip_id',
    relatedKey:'id',
    pivotColumns:['number_of_person'],
  })
  public users: ManyToMany<typeof User>

  @column({ isPrimary: true })
  public id: number

  @column()
  public tripDate: DateTime

  @column()
  public trip_price_id:number

  @column()
  public trip_type_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
  
  public serializeExtra = true
}