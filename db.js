import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

// deletes a task
export async function deleteTask() {
  return await db('todos').where({ id: 1 }).delete()
}
