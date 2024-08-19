import {
  getTodos,
  close,
  deleteTask,
  addTodo,
  updateTask,
  searchTask,
  completeTask,
} from './db.js'

let done = 'color:green'
let notDone = 'color:red'

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(
      `${todo.id}: ${(todo.tasks, notDone)}: ${(todo.completed, done)}`,
    )
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteTodo(id) {
  try {
    deleteTask(id)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function addTask(task) {
  try {
    await addTodo(task)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateTodo(task) {
  try {
    await updateTask(task)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function searchTodo(id) {
  try {
    const todos = await searchTask(id)
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function completeTodo(id) {
  try {
    await completeTask(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
