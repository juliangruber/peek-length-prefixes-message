var lpm = require('length-prefixed-message')
var PassThrough = require('stream').PassThrough
var once = require('once')

module.exports = peek

function peek (stream, cb) {
  cb = once(cb)
  var out = PassThrough()
  stream.on('error', cb)

  lpm.read(stream, function (buf) {
    stream.removeListener('error', cb)
    lpm.write(out, buf)
    stream.pipe(out)
    cb(null, buf)
  })

  return out
}
