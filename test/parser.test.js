const { parse } = require('../src/parser')
const exampleInput = '5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL'

test('Should be able to produce a world from input', () => {
  expect(parse(exampleInput))
    .toEqual(expect.objectContaining({
      world: {
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

test('Should be able to produce robots actions from input', () => {
  expect(parse(exampleInput))
    .toEqual(expect.objectContaining({
      robots: expect.arrayContaining([
        expect.objectContaining({
          actions: 'RFRFRFRF'.split('')
        }),
        expect.objectContaining({
          actions: 'FRRFLLFFRRFLL'.split('')
        }),
        expect.objectContaining({
          actions: 'LLFFFLFLFL'.split('')
        })
      ])
    }))
})
