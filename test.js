var test = require('tape')
var peek = require('.')
var PassThrough = require('stream').PassThrough
var collect = require('collect-stream')
var varint = require('varint')

test('peek', function (t) {
  t.plan(4)

  var data = Buffer.concat([
    Buffer(varint.encode(10)),
    Buffer(10).fill('a')
  ])

  var source = PassThrough()
  source.push(data)
  source.push(null)

  source = peek(source, function (err, buf) {
    t.error(err, 'peeked')
    t.deepEqual(buf, Buffer(10).fill('a'), 'peek buf')
  })
  collect(source, function (err, _data) {
    t.error(err)
    t.deepEqual(_data, data)
  })
})

