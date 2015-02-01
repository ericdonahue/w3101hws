(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    var sum = values.reduce(function(a, b) {
      return a + b;
    });
    return sum;
  };

  module.exports = sumArray; // DON'T CHANGE THIS
})();
