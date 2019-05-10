const parseActions = line => line.split('')

const parsePosition = line => {
  const [ x, y, dir ] = line.split(' ')
  return { x: parseInt(x), y: parseInt(y), dir }
}

const parseRobot = ([ positionLine, actionsLine ]) =>
  ({ position: parsePosition(positionLine), actions: parseActions(actionsLine) })

const buildRobots = (robotLines, robots = []) =>
  robotLines.length >= 2
    ? buildRobots(robotLines.slice(2), robots.concat(parseRobot(robotLines)))
    : robots

function buildWorld(line) {
  const [ topX, topY ] = line.split(' ').map(numString => parseInt(numString))
  return { topX, topY, safePlaces: [] }
}

function parse(input) {
  const lines = input.trim().split('\n')
  const world = buildWorld(lines[0])
  const robots = buildRobots(lines.slice(1))
  return { world, robots }
}

module.exports = {
  parse
}
