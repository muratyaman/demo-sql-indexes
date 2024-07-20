/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('with_indexes', function (table) {
      table.increments('id').primary();
      table.uuid('ref').notNullable().unique();
      table.string('full_name', 100).notNullable();
      table.timestamp('created_at').notNullable().index();
      table.timestamp('updated_at').notNullable().index();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('with_indexes');
};
