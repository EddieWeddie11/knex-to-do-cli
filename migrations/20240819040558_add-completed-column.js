/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.table('todos', (table) => {
    table.boolean('completed').defaultTo(false)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return (
    knex.schema.table('todo'),
    (table) => {
      table.dropColumn('completed')
    }
  )
}
