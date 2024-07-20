/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('without_indexes', function (table) {
      table.uuid('ref').notNullable().index();
      table.string('full_name', 100).notNullable();
      table.timestamp('created_at').notNullable();
      table.timestamp('updated_at').notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('without_indexes');
};
