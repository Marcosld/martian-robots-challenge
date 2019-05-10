const { fall } = require('../src/effects')

describe('fall', () => {
  test('should keep position if it doesnt fall', () => {
    const actual = {
      world: { topX: 2, topY: 2, safePlaces: [] },
      lastPosition: { x: 2, y: 1 },
      position: { x: 2, y: 2 }
    }
    expect(fall(actual.world, actual.lastPosition, actual.position))
      .toEqual(expect.objectContaining({
        position: expect.objectContaining({
          x: 2, y: 2
        })
      }))
  })
  test('should revert position if it falls', () => {
    const actual = {
      world: { topX: 2, topY: 2, safePlaces: [] },
      lastPosition: { x: 2, y: 2 },
      position: { x: 2, y: 3 }
    }
    expect(fall(actual.world, actual.lastPosition, actual.position))
      .toEqual(expect.objectContaining({
        position: expect.objectContaining({
          x: 2, y: 2, isFallen: true
        })
      }))
  })
  test('should keep position if it would fall but we are in a safe place', () => {
    const actual = {
      world: { topX: 2, topY: 2, safePlaces: [ { x: 2, y: 1 } ] },
      lastPosition: { x: 2, y: 1 },
      position: { x: 2, y: 3 }
    }
    expect(fall(actual.world, actual.lastPosition, actual.position))
      .toEqual(expect.objectContaining({
        position: expect.objectContaining({
          x: 2, y: 1
        })
      }))
  })
  test('should keep the same world if robot doesnt fall', () => {
    const actual = {
      world: { topX: 2, topY: 2, safePlaces: [] },
      lastPosition: { x: 1, y: 1 },
      position: { x: 0, y: 1 }
    }
    expect(fall(actual.world, actual.lastPosition, actual.position))
      .toEqual(expect.objectContaining({
        world: expect.objectContaining({
          safePlaces: []
        })
      }))
  })
  test('should update world safe places if robot falls', () => {
    const actual = {
      world: { topX: 1, topY: 2, safePlaces: [ { x: 1, y: 1 } ] },
      lastPosition: { x: 0, y: 1 },
      position: { x: -1, y: 1 }
    }
    expect(fall(actual.world, actual.lastPosition, actual.position))
      .toEqual(expect.objectContaining({
        world: expect.objectContaining({
          safePlaces: expect.arrayContaining([
            expect.objectContaining({ x: 0, y: 1 }),
            expect.objectContaining({ x: 1, y: 1 })
          ])
        })
      }))
  })
  test('should not add a new world safe place if it already existed', () => {
    const actual = {
      world: { topX: 1, topY: 2, safePlaces: [ { x: 0, y: 1 } ] },
      lastPosition: { x: 0, y: 1 },
      position: { x: -1, y: 1 }
    }
    expect(fall(actual.world, actual.lastPosition, actual.position))
      .toEqual(expect.objectContaining({
        world: expect.objectContaining({
          safePlaces: [
            expect.objectContaining({ x: 0, y: 1 })
          ]
        })
      }))
  })
})
