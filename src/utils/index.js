const getRobotPosition = ({ position: { x, y } }) =>
  ({ x, y })

const isSamePosition = ({ x, y }) => newPos =>
  newPos.x === x && newPos.y === y

module.exports = {
  getRobotPosition,
  isSamePosition
}
