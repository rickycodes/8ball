#!/usr/bin/env node

const arg = process.argv.map((a, i) => i > 1 ? `${a} ` : null).join('')
const eightball = require('./')()

if(!arg || arg.substring(arg.length - 2) !== '? ')
  console.log(`ask me a question, silly!`) & process.exit()

console.log(eightball)
