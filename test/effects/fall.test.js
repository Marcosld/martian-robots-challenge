const { isFallingPosition } = require('../../src/effects/fall')

describe('isFallingPosition', () => {
  test('should know if position isnt falling', () => {
    const actual = {
      world: {
        topX: 2,
        topY: 2
      },
      position: {
        x: 2,
        y: 1
      }
    }
    expect(isFallingPosition(actual.world, actual.position)).toBeFalsy()
  })
  test('should know if position is over top', () => {
    const actual = {
      world: {
        topX: 2,
        topY: 1
      },
      position: {
        x: 2,
        y: 2
      }
    }
    expect(isFallingPosition(actual.world, actual.position)).toBeTruthy()
  })
  test('should know if position is over bottom', () => {
    const actual = {
      world: {
        topX: 2,
        topY: 2
      },
      position: {
        x: 2,
        y: -1
      }
    }
    expect(isFallingPosition(actual.world, actual.position)).toBeTruthy()
  })
})
