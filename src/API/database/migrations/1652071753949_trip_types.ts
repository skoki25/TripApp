import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TripTypes extends BaseSchema {
  protected tableName = 'trip_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('type')
      table.timestamps(true)
    })
    this.schema.createTableIfNotExists
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
