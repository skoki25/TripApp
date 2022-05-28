import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Trips extends BaseSchema {
  protected tableName = 'trips'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('trip_type_id').unsigned().nullable().references('id').inTable('trip_types')
      table.integer('trip_price_id').unsigned().nullable().references('id').inTable('trip_prices')
      table.date('trip_date')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}