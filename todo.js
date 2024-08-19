#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const id = userInputs[3]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'done':
    await commands.deleteTodo(id)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
