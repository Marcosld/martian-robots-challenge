const { positionToLine } = require('../src/reporter')

describe('getRobotLine', () => {
  test('should be able to print a normal position', () => {
    const actual = { x: 1, y: 1, dir: 'N' }
    const expected = '1 1 N'
    expect(positionToLine(actual)).toEqual(expected)
  })
  test('should be able to print a fallen position', () => {
    const actual = { x: 3, y: 2, dir: 'E', isFallen: true }
    const expected = '3 2 E LOST'
    expect(positionToLine(actual)).toEqual(expected)
  })
})
