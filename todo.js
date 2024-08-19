#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2] // ./todo
const id = userInputs[3]
const arg1 = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'done':
    await commands.deleteTodo(id)
    break
  case 'add':
    await commands.addTask(id)
    break
  case 'update':
    await commands.addTask(arg1)
    break
  case 'search':
    await commands.searchTodo(id)
    break
  case 'complete':
    await commands.completeTodo(id)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
