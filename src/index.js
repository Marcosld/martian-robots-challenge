const { parse } = require('../src/parser')
const { executeInstructions } = require('../src/executor')
const { positionToLine } = require('../src/reporter')

const getFinalPositions = ({ world, position = [] }, [ robot, ...nextRobots ]) =>
  robot
    ? [].concat(position, getFinalPositions(executeInstructions(world, robot), nextRobots))
    : [position]

function processInput(input) {
  const { world, robots } = parse(input)
  return getFinalPositions({ world }, robots)
    .map(positionToLine)
    .join('\n')
}

module.exports = processInput
