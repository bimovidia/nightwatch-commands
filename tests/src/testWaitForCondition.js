var MockServer  = require('mockserver');

module.exports = {
  setUp: function (callback) {
    this.client = require('../nightwatch.js').init();

    callback();
  },

  testSuccess : function(test) {
    this.client.waitForCondition('return true;', 100, 0, function callback(result) {
      test.equal(result, true);
      test.done();
    });
  },

  testFailure : function(test) {
    this.client.waitForCondition('return false', 600, 0, function callback(result) {
      test.equal(result, false);
      test.done();
    });
  },

  tearDown : function(callback) {
    this.client = null;
    // clean up
    callback();
  }
}