/**
 * Modules
 */

var identity = require('@f/identity')

/**
 * Expose reduceReplace
 */

module.exports = reduceReplace['default'] = reduceReplace

/**
 * reduceReplace
 */

function reduceReplace (fn) {
  fn = fn || identity

  return function (state, value) {
    return fn(value)
  }
}
