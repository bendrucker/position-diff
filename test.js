'use strict'

var test = require('tape')
var positionDiff = require('./')

test(function (t) {
  var element1 = {offsetLeft: 1, offsetTop: 2}
  var element2 = {offsetLeft: 10, offsetTop: 20}
  t.deepEqual(positionDiff(element1, element2), {
    x: 9,
    y: 18
  })
  t.end()
})
