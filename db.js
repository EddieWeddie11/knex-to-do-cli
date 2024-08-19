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

// Deletes a task
export async function deleteTask(id) {
  return await db('todos').where({ id }).delete()
}

// Adds a task
export async function addTodo(tasks) {
  return await db('todos').insert({ tasks })
}

// Updates a task
export async function updateTask(id, tasks) {
  return await db('todos').where({ id }).update(tasks)
}

// Searches a task
export async function searchTask(id) {
  return await db('todos').where('tasks', id)
}

// Completes a task
export async function completeTask(id) {
  return await db('todos').where({ id }).update({ completed: true })
}
