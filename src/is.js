var createAssertFn = require('core-z/assert-fn')
var _is = require('type-of-is')

// 'is' assert
module.exports = createAssertFn(function is (args, x) {
  return [_is(x, args[0])]
})
