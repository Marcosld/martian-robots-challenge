const { executeInstructions } = require('../src/executor')

describe('executeRobot should return final position', () => {
  test('should return final position for a robot that doesnt fall', () => {
    const actual = {
      world: { topX: 5, topY: 3, safePlaces: [] },
      robot: {
        position: { x: 1, y: 1, dir: 'E' },
        actions: 'RFRFRFRF'.split('')
      }
    }
    const expected = expect.objectContaining({
      position: { x: 1, y: 1, dir: 'E' }
    })
    expect(executeInstructions(actual.world, actual.robot)).toEqual(expected)
  })
  test('should return final position for a robot that falls', () => {
    const actual = {
      world: { topX: 5, topY: 3, safePlaces: [] },
      robot: {
        position: { x: 3, y: 2, dir: 'N' },
        actions: 'FRRFLLFFRRFLL'.split('')
      }
    }
    const expected = expect.objectContaining({
      position: { x: 3, y: 3, dir: 'N', isFallen: true }
    })
    expect(executeInstructions(actual.world, actual.robot)).toEqual(expected)
  })
  test('should return final position for a robot that doesnt fall (safe places!)', () => {
    const actual = {
      world: { topX: 5, topY: 3, safePlaces: [{ x: 3, y: 3 }] },
      robot: {
        position: { x: 0, y: 3, dir: 'W' },
        actions: 'LLFFFLFLFL'.split('')
      }
    }
    const expected = expect.objectContaining({
      position: { x: 2, y: 3, dir: 'S' }
    })
    expect(executeInstructions(actual.world, actual.robot)).toEqual(expected)
  })
  test('should return same world for a robot that doesnt fall', () => {
    const actual = {
      world: { topX: 5, topY: 3, safePlaces: [] },
      robot: {
        position: { x: 1, y: 1, dir: 'E' },
        actions: 'RFRFRFRF'.split('')
      }
    }
    const expected = expect.objectContaining({
      world: actual.world
    })
    expect(executeInstructions(actual.world, actual.robot)).toEqual(expected)
  })
  test('should return updated world for a robot that falls', () => {
    const actual = {
      world: { topX: 5, topY: 3, safePlaces: [] },
      robot: {
        position: { x: 3, y: 2, dir: 'N' },
        actions: 'FRRFLLFFRRFLL'.split('')
      }
    }
    const expected = expect.objectContaining({
      world: { topX: 5, topY: 3, safePlaces: [{ x: 3, y: 3 }] }
    })
    expect(executeInstructions(actual.world, actual.robot)).toEqual(expected)
  })
  test('should return updated world for a robot would fall (safe places!)', () => {
    const actual = {
      world: { topX: 5, topY: 3, safePlaces: [{ x: 3, y: 3 }] },
      robot: {
        position: { x: 0, y: 3, dir: 'W' },
        actions: 'LLFFFLFLFL'.split('')
      }
    }
    const expected = expect.objectContaining({
      world: actual.world
    })
    expect(executeInstructions(actual.world, actual.robot)).toEqual(expected)
  })
})
