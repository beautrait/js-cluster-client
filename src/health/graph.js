'use strict'

const util = require('util')

module.exports = (send) => {

  return util.promisify((opts, callback) => {
    if (typeof opts == 'function') {
      callback = opts
      opts = undefined
    }
    send({
      path: 'health/graph',
      qs: opts
    }, callback)
  })
}
