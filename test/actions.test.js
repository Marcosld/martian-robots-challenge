const {
  R,
  L,
  F
} = require('../src/actions')

describe('movement R', () => {
  test('should return the robots next direction updated', () => {
    const position = { dir: 'N' }
    const actual = R(position)
    const expected = { dir: 'E' }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
  test('should return the robots next direction updated', () => {
    const position = { dir: 'W' }
    const actual = R(position)
    const expected = { dir: 'N' }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
  test('should return the robots next direction updated', () => {
    const position = { dir: 'S' }
    const actual = R(position)
    const expected = { dir: 'W' }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
})

describe('movement L', () => {
  test('should return the robots next direction updated', () => {
    const position = { dir: 'N' }
    const actual = L(position)
    const expected = { dir: 'W' }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
  test('should return the robots next direction updated', () => {
    const position = { dir: 'W' }
    const actual = L(position)
    const expected = { dir: 'S' }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
  test('should return the robots next direction updated', () => {
    const position = { dir: 'S' }
    const actual = L(position)
    const expected = { dir: 'E' }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
})

describe('movement F', () => {
  test('should return the robots next position when heading N', () => {
    const position = { x: 0, y: 0, dir: 'N' }
    const actual = F(position)
    const expected = { x: 0, y: 1 }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
  test('should return the robots next position when heading S', () => {
    const position = { x: 0, y: 0, dir: 'S' }
    const actual = F(position)
    const expected = { x: 0, y: -1 }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
  test('should return the robots next position when heading E', () => {
    const position = { x: 0, y: 0, dir: 'E' }
    const actual = F(position)
    const expected = { x: 1, y: 0 }
    expect(actual).toEqual(expect.objectContaining(expected))
  })
})
