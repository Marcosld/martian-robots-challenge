const actions = require('./actions')
const { fall } = require('./effects')

const getNextState = (board, position, action) => fall(board, position, actions[action](position))

const getStateToPresent = ({ board, nextPosition }) => ({ board, position: nextPosition })

const executeInstructions = (board, { position, actions }) =>
  actions.reduce(({ board, position }, action) =>
    position.isFallen
      ? { board, position }
      : getStateToPresent(getNextState(board, position, action))
  , { board, position })

module.exports = {
  executeInstructions
}
