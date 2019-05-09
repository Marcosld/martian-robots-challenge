const parseActions = line => line.split('')

const parsePosition = line => {
  const data = line.split(' ')
  const [ x, y ] = data.map(numString => parseInt(numString))
  const [ dir ] = data.slice(-1)
  return { x, y, dir }
}

const parseRobot = (positionLine, actionsLine) =>
  ({ position: parsePosition(positionLine), actions: parseActions(actionsLine) })

const isRobotStartingLine = lineNumber => lineNumber % 2 === 0

const buildRobots = lines =>
  lines.reduce((builtRobots, line, i) =>
    isRobotStartingLine(i) ? builtRobots.concat(parseRobot(line, lines[i + 1])) : builtRobots
  , [])

const buildBoard = line => {
  const [ topX, topY ] = line.split(' ').map(numString => parseInt(numString))
  return { topX, topY, safePlaces: [] }
}

function parse(input) {
  const lines = input.split('\n').filter(line => line !== '')
  const board = buildBoard(lines[0])
  const robots = buildRobots(lines.slice(1))
  return { board, robots }
}

module.exports = {
  parse
}
