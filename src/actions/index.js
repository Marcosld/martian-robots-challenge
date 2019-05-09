const { turnRight, turnLeft } = require('./directional')
const forward = require('./forward')

module.exports = {
  R: turnRight,
  L: turnLeft,
  F: forward
}
