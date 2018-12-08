import * as assert from 'assert'
import { add, minus } from '../cal.js'

describe('add function', function () {
  it('add(1, 2) = 3', function () {
    assert.deepStrictEqual(add(1, 2), 3)
  })

  it('add(1, -2) = -1', function () {
    assert.deepStrictEqual(add(1, -2), -1)
  })
})

describe('minus function', function () {
  it('minus(1, 2) = -1', function () {
    assert.deepStrictEqual(minus(1, 2), -1)
  })

  it('minus(1, -2) = 3', function () {
    assert.deepStrictEqual(minus(1, -2), 3)
  })
})