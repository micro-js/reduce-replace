/**
 * Imports
 */

var reduceReplace = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.equal(reduceReplace()(1, 2), 2)
  t.equal(reduceReplace(add1)(1, 2), 3)
  t.end()
})

function add1 (n) {
  return n + 1
}
