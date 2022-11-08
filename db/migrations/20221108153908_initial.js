/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('teas', function(table) {
      table.increments('id').primary()
      table.text('type')
      table.text('name')
      table.text('img')
      table.text('origin')
      table.text('description')
      table.text('brew_time')
      table.integer('temperature')
      table.integer('infusions')
      table.text('caffeine_level')
      table.text('farmer')
      table.text('farmer_img')
  })
    .createTable('comments', function(table) {
      table.increments('id').primary()
      table.integer('tea_id').unsigned()
      table.foreign('tea_id').references('teas.id')
      table.text('user_name').notNullable()
      table.text('user_message').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('comments')
    .dropTable('teas')
}
