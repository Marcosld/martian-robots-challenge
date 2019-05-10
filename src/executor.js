const actions = require('./actions')
const { fall } = require('./effects')

const getNextState = (world, position, action) => fall(world, position, actions[action](position))

const executeInstructions = (world, { position, actions }) =>
  actions.reduce(({ world, position }, action) =>
    position.isFallen
      ? { world, position }
      : getNextState(world, position, action)
  , { world, position })

module.exports = {
  executeInstructions
}
