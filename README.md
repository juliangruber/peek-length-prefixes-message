# peek-length-prefixed-message

  Get a stream's first [length-prefixed-message](https://npmjs.org/package/length-prefixed-message)
  while returning an unconsumed stream.

## Example

```js
var peek = require('peek-length-prefixed-message')

var stream = createStream()

stream = peek(stream, function (err, buf) {
  // ...
})
```

## Installation

```bash
$ npm install peek=length-prefixed-message
```

## API

### `stream = peek(stream, cb)`

## License

  MIT
