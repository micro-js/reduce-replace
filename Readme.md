
# reduce-replace

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

A reducer that replaces the accumulator with the next value

## Installation

    $ npm install @f/reduce-replace

## Usage

```js
var reduceReplace = require('@f/reduce-replace')

const todoReducer = combineReducers({
  text: handleActions({
    [TODO_SET_TEXT]: reduceReplace({text} => text),
  })
})
```

## API

### reduceReplace(fn)

- `fn` - Transforms the 2nd parameter to reduce. Defaults to [https://github.com/micro-js/identity](identity).

**Returns:** A reducer that replaces the accumulator with the value returned by `fn(value)`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/reduce-replace.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/reduce-replace
[git-image]: https://img.shields.io/github/tag/micro-js/reduce-replace.svg
[git-url]: https://github.com/micro-js/reduce-replace
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/reduce-replace.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/reduce-replace
