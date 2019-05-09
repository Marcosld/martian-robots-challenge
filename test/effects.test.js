const { fall } = require('../src/effects')

describe('fall', () => {
  test('should update nextPosition if it doesnt fall', () => {
    const actual = {
      board: { topX: 2, topY: 2, safePlaces: [] },
      robot: {
        position: { x: 2, y: 1 }
      },
      nextPosition: { x: 2, y: 2 }
    }
    expect(fall(actual.board, actual.robot, actual.nextPosition))
      .toEqual(expect.objectContaining({
        nextPosition: expect.objectContaining({
          x: 2, y: 2
        })
      }))
  })
  test('should update nextPosition if it falls', () => {
    const actual = {
      board: { topX: 2, topY: 2, safePlaces: [] },
      robot: {
        position: { x: 2, y: 1 }
      },
      nextPosition: { x: 2, y: 3 }
    }
    expect(fall(actual.board, actual.robot, actual.nextPosition))
      .toEqual(expect.objectContaining({
        nextPosition: expect.objectContaining({
          x: 2, y: 3, isFallen: true
        })
      }))
  })
  test('should update nextPosition if it would fall but we are in a safe place', () => {
    const actual = {
      board: { topX: 2, topY: 2, safePlaces: [ { x: 2, y: 1 } ] },
      robot: {
        position: { x: 2, y: 1 }
      },
      nextPosition: { x: 2, y: 3 }
    }
    expect(fall(actual.board, actual.robot, actual.nextPosition))
      .toEqual(expect.objectContaining({
        nextPosition: expect.objectContaining({
          x: 2, y: 1
        })
      }))
  })
  test('should return the same board if robot doesnt fall', () => {
    const actual = {
      board: { topX: 2, topY: 2, safePlaces: [] },
      robot: {
        position: { x: 1, y: 1 }
      },
      nextPosition: { x: 0, y: 1 }
    }
    expect(fall(actual.board, actual.robot, actual.nextPosition))
      .toEqual(expect.objectContaining({
        board: expect.objectContaining({
          safePlaces: []
        })
      }))
  })
  test('should update board safe places if robot falls', () => {
    const actual = {
      board: { topX: 1, topY: 2, safePlaces: [ { x: 1, y: 1 } ] },
      robot: {
        position: { x: 0, y: 1 }
      },
      nextPosition: { x: -1, y: 1 }
    }
    expect(fall(actual.board, actual.robot, actual.nextPosition))
      .toEqual(expect.objectContaining({
        board: expect.objectContaining({
          safePlaces: expect.arrayContaining([
            expect.objectContaining({ x: 0, y: 1 }),
            expect.objectContaining({ x: 1, y: 1 })
          ])
        })
      }))
  })
  test('should not add a new board safe place if it already existed', () => {
    const actual = {
      board: { topX: 1, topY: 2, safePlaces: [ { x: 0, y: 1 } ] },
      robot: {
        position: { x: 0, y: 1 }
      },
      nextPosition: { x: -1, y: 1 }
    }
    expect(fall(actual.board, actual.robot, actual.nextPosition))
      .toEqual(expect.objectContaining({
        board: expect.objectContaining({
          safePlaces: [
            expect.objectContaining({ x: 0, y: 1 })
          ]
        })
      }))
  })
})
