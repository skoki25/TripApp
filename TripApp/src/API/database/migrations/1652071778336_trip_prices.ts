import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TripPrices extends BaseSchema {
  protected tableName = 'trip_prices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('gus_price')
      table.float('avarage_gus_on_km')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
