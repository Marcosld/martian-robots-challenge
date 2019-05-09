const { isFallingPosition } = require('../../src/effects/fall')

describe('isFallingPosition', () => {
  test('should know if position isnt falling', () => {
    const actual = {
      board: {
        topX: 2,
        topY: 2
      },
      position: {
        x: 2,
        y: 1
      }
    }
    expect(isFallingPosition(actual.board, actual.position)).toBeFalsy()
  })
  test('should know if position is over top', () => {
    const actual = {
      board: {
        topX: 2,
        topY: 1
      },
      position: {
        x: 2,
        y: 2
      }
    }
    expect(isFallingPosition(actual.board, actual.position)).toBeTruthy()
  })
  test('should know if position is over bottom', () => {
    const actual = {
      board: {
        topX: 2,
        topY: 2
      },
      position: {
        x: 2,
        y: -1
      }
    }
    expect(isFallingPosition(actual.board, actual.position)).toBeTruthy()
  })
})
