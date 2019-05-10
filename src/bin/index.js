#! /usr/bin/env node
const processInput = require('../')
const fs = require('fs').promises

async function execute() {
  const inputPath = process.argv[2]
  if (!inputPath) throw new Error('First argument should be a path to the input file :)')
  const input = await fs.readFile(inputPath, 'utf-8')
  return processInput(input)
}

execute()
  .then(console.log)
  .catch(error => {
    console.log(error.stack)
    process.exit(1)
  })
