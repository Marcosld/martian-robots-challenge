const positionToLine = ({ isFallen, ...position }) =>
  Object.values(position).join(' ').concat(isFallen ? ' LOST' : '')

module.exports = {
  positionToLine
}
