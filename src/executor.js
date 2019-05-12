const actions = require('./actions')
const { fall } = require('./effects')

const getNextState = (world, position, action) =>
  position.isFallen ? { world, position } : fall(world, position, actions[action](position))

const executeInstructions = (world, { position, actions }) =>
  actions.reduce(({ world, position }, action) =>
    getNextState(world, position, action)
  , { world, position })

module.exports = {
  executeInstructions
}
