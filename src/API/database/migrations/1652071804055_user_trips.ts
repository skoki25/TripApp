import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserTrips extends BaseSchema {
  protected tableName = 'trip_user'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('trip_id').unsigned().references('id').inTable('trips')
      table.integer('number_of_person')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
