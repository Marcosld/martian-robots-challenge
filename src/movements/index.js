const directions = ['N', 'E', 'S', 'W']
const movements = {
  N: (x, y) => ({ x, y: y + 1 }),
  E: (x, y) => ({ x: x + 1, y }),
  S: (x, y) => ({ x, y: y - 1 }),
  W: (x, y) => ({ x: x - 1, y })
}

function turn (position, dirs) {
  return {
    ...position,
    dir: dirs[dirs.indexOf(position.dir) + 1] || dirs[0]
  }
}

const turnRight = position => turn(position, directions)

const turnLeft = position => turn(position, [...directions].reverse())

const move = ({ x, y, dir }) => ({ ...movements[dir](x, y), dir })

module.exports = {
  R: turnRight,
  L: turnLeft,
  F: move
}
