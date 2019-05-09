const { parse } = require('../src/parser')
const { executeInstructions } = require('../src/executor')
const { positionToLine } = require('../src/reporter')

const getActualBoard = (startingBoard, lastState) => lastState ? lastState.board : startingBoard

function processInput(input) {
  const { board, robots } = parse(input)
  return robots
    .reduce((finalStates, robot) =>
      finalStates.concat(executeInstructions(getActualBoard(board, finalStates.slice(-1)[0]), robot))
    , [])
    .map(({ position }) => positionToLine(position))
    .join('\n')
}

module.exports = processInput
