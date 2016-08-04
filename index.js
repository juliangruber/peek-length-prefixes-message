var lpm = require('length-prefixed-message')
var PassThrough = require('stream').PassThrough
var once = require('once')
var varint = require('varint')

module.exports = peek

function peek (stream, cb) {
  cb = once(cb)
  var out = PassThrough()
  stream.on('error', cb)

  lpm.read(stream, function (buf) {
    stream.removeListener('error', cb)
    out.push(Buffer(varint.encode(buf.length)))
    out.push(buf)
    stream.pipe(out)
    cb(null, buf)
  })

  return out
}
