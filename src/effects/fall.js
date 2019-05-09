const { isSamePosition, getRobotPosition } = require('../utils')

const addScentToBoard = (board, robot) =>
  ({ ...board, safePlaces: board.safePlaces.concat(getRobotPosition(robot)) })

const addFallenStatus = (nextPosition) =>
  ({ ...nextPosition, isFallen: true })

const isRobotInASafePlace = (board, robot) =>
  board.safePlaces.find(isSamePosition(getRobotPosition(robot)))

const applyFallEffect = (board, robot, nextPosition) =>
  isRobotInASafePlace(board, robot)
    ? { board, robot, nextPosition: getRobotPosition(robot) }
    : { board: addScentToBoard(board, robot), robot, nextPosition: addFallenStatus(nextPosition) }

const isFallingPosition = ({ topX, topY }, { x, y }) =>
  x > topX || y > topY || x < 0 || y < 0

const apply = (board, robot, nextPosition) =>
  isFallingPosition(board, nextPosition) ? applyFallEffect(board, robot, nextPosition) : { board, robot, nextPosition }

module.exports = {
  isFallingPosition,
  apply
}
