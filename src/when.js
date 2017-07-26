var createAssertFn = require('core-z/assert-fn')

// 'when' assert
module.exports = createAssertFn(function when (args) {
  for (var i = 0; i < args.length; i++) {
    if (args[i] !== true) return [false]
  }
  return [true]
})
