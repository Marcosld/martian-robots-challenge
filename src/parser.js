const isPositionLine = lineNumber => lineNumber % 2 === 0

const parsePosition = line => {
  const data = line.split(' ')
  const [ x, y ] = data.map(numString => parseInt(numString))
  const [ dir ] = data.slice(-1)
  return { x, y, dir }
}

const parseMovements = line => line.split('')

function parse(input) {
  const lines = input.split('\n')
  const [ topX, topY ] = lines[0].split(' ').map(numString => parseInt(numString))
  const robots = lines.slice(1).reduce((pRobots, line, i, actualLines) =>
    isPositionLine(i)
      ? pRobots.concat({ position: parsePosition(line), movements: parseMovements(actualLines[i + 1]) })
      : pRobots
  , [])
  return {
    board: {
      topX,
      topY,
      safePlaces: []
    },
    robots
  }
}

module.exports = {
  parse
}
