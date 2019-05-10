const isSamePosition = ({ x, y }) => position =>
  position.x === x && position.y === y

const addScentToWorld = (world, { x, y }) =>
  ({ ...world, safePlaces: world.safePlaces.concat({ x, y }) })

const addFallenStatus = position =>
  ({ ...position, isFallen: true })

const isASafePosition = (world, position) =>
  world.safePlaces.find(isSamePosition(position))

const applyFallEffect = (world, position) =>
  isASafePosition(world, position)
    ? { world, position }
    : { world: addScentToWorld(world, position), position: addFallenStatus(position) }

const isFallingPosition = ({ topX, topY }, { x, y }) =>
  x > topX || y > topY || x < 0 || y < 0

const apply = (world, lastPosition, position) =>
  isFallingPosition(world, position) ? applyFallEffect(world, lastPosition) : { world, position }

module.exports = {
  isFallingPosition,
  apply
}
