const actions = {
  N: (x, y) => ({ x, y: y + 1 }),
  E: (x, y) => ({ x: x + 1, y }),
  S: (x, y) => ({ x, y: y - 1 }),
  W: (x, y) => ({ x: x - 1, y })
}

const move = ({ x, y, dir }) => ({ ...actions[dir](x, y), dir })

module.exports = move
