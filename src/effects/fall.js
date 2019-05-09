const { isSamePosition } = require('../utils')

const addScentToBoard = (board, { x, y }) =>
  ({ ...board, safePlaces: board.safePlaces.concat({ x, y }) })

const addFallenStatus = position =>
  ({ ...position, isFallen: true })

const isASafePosition = (board, position) =>
  board.safePlaces.find(isSamePosition(position))

const applyFallEffect = (board, nextPosition) =>
  isASafePosition(board, nextPosition)
    ? { board, nextPosition }
    : { board: addScentToBoard(board, nextPosition), nextPosition: addFallenStatus(nextPosition) }

const isFallingPosition = ({ topX, topY }, { x, y }) =>
  x > topX || y > topY || x < 0 || y < 0

const apply = (board, lastPosition, nextPosition) =>
  isFallingPosition(board, nextPosition) ? applyFallEffect(board, lastPosition) : { board, nextPosition }

module.exports = {
  isFallingPosition,
  apply
}
