const isSamePosition = ({ x, y }) => newPos =>
  newPos.x === x && newPos.y === y

module.exports = {
  isSamePosition
}
