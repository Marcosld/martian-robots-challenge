const processInput = require('../src')
const path = require('path')
const fs = require('fs').promises

const getFixture = fixture => path.join(__dirname, 'fixtures', fixture)

describe('processInput', () => {
  test('should be able to process sample input', async () => {
    const actual = await fs.readFile(getFixture('sampleInput.txt'), 'utf-8')
    const expected = await fs.readFile(getFixture('sampleOutput.txt'), 'utf-8')
    expect(processInput(actual)).toEqual(expected.trim())
  })
})
