const { parse } = require('../src/parser')
const { exampleInput } = require('./fixtures/exampleInput')

test('Should be able to produce a board from input', () => {
  expect(parse(exampleInput))
    .toEqual(expect.objectContaining({
      board: {
        topX: 5,
        topY: 3,
        safePlaces: []
      }
    }))
})

test('Should be able to produce robots position from input', () => {
  expect(parse(exampleInput))
    .toEqual(expect.objectContaining({
      robots: expect.arrayContaining([
        expect.objectContaining({
          position: { x: 1, y: 1, dir: 'E' }
        }),
        expect.objectContaining({
          position: { x: 3, y: 2, dir: 'N' }
        }),
        expect.objectContaining({
          position: { x: 0, y: 3, dir: 'W' }
        })
      ])
    }))
})

test('Should be able to produce robots movements from input', () => {
  expect(parse(exampleInput))
    .toEqual(expect.objectContaining({
      robots: expect.arrayContaining([
        expect.objectContaining({
          movements: 'RFRFRFRF'.split('')
        }),
        expect.objectContaining({
          movements: 'FRRFLLFFRRFLL'.split('')
        }),
        expect.objectContaining({
          movements: 'LLFFFLFLFL'.split('')
        })
      ])
    }))
})
