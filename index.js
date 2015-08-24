'use strict'

module.exports = function positionDifference (element1, element2) {
  return {
    x: element2.offsetLeft - element1.offsetLeft,
    y: element2.offsetTop - element2.offsetTop
  }
}
