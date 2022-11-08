/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('teas', table => {
      table.increments('id').primary()
      table.string('type')
      table.string('name')
      table.string('img')
      table.string('origin')
      table.text('description')
      table.string('brew_time')
      table.integer('temperature')
      table.integer('infusions')
      table.string('caffeine_level')
      table.string('farmer')
      table.string('farmer_img')

  })
    .createTable('comments', table => {
      table.increments('id').primary()
      table.integer('tea_id').unsigned()
      table.foreign('tea_id').references('teas.id')
      table.string('user_name').notNullable()
      table.text('user_message').notNullable()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('teas')
    .dropTableIfExists('comments')
}
