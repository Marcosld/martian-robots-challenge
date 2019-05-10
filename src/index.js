const { parse } = require('../src/parser')
const { executeInstructions } = require('../src/executor')
const { positionToLine } = require('../src/reporter')

const getActualWorld = (startingWorld, [lastState]) => lastState ? lastState.world : startingWorld

function processInput(input) {
  const { world, robots } = parse(input)
  return robots // Recursive solution was uglier :/
    .reduce((executedRobots, robot) =>
      executedRobots.concat(executeInstructions(
        getActualWorld(world, executedRobots.slice(-1)),
        robot
      ))
    , [])
    .map(({ position }) => positionToLine(position))
    .join('\n')
}

module.exports = processInput
