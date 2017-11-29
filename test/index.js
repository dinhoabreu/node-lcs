/* eslint-env mocha */
var assert = require('assert')
var lcs = require('../index')

describe('longestCommonSubstring', function () {
  it('should return common " substring"', function () {
    var actual = lcs('Testing common "abcd..." substring', 'abcd substring')
    var expected = {
      length: 10,
      offset: 24,
      sequence: ' substring'
    }
    assert.deepEqual(actual, expected)
  })
  it('should return empty sequence if none common', function () {
    var actual = lcs('Testing common "abcd..." substring', '')
    var expected = {
      length: 0,
      offset: 0,
      sequence: ''
    }
    assert.deepEqual(actual, expected)
  })
  it('should return empty with invalid params', function () {
    var actual = lcs()
    var expected = {
      length: 0,
      offset: 0,
      sequence: ''
    }
    assert.deepEqual(actual, expected)
  })
})
