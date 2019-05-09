const directions = ['N', 'E', 'S', 'W']

function turn (position, dirs) {
  return {
    ...position,
    dir: dirs[dirs.indexOf(position.dir) + 1] || dirs[0]
  }
}

const turnRight = position => turn(position, directions)

const turnLeft = position => turn(position, [...directions].reverse())

module.exports = {
  turnRight,
  turnLeft
}
