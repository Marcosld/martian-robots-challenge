const { parse } = require('../src/parser')
const { executeInstructions } = require('../src/executor')
const { positionToLine } = require('../src/reporter')

const getUpdatedWorld = (initialWorld, [{ world } = { world: initialWorld }]) => world

function processInput(input) {
  const { world, robots } = parse(input)
  return robots
    .reduce((executedRobots, robot) =>
      executedRobots.concat(executeInstructions(
        getUpdatedWorld(world, executedRobots.slice(-1)), // Recursive solution was uglier :/
        robot
      ))
    , [])
    .map(({ position }) => positionToLine(position))
    .join('\n')
}

module.exports = processInput
