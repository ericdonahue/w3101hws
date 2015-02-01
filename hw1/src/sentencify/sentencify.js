(function () {
  'use strict';

  var sentencify = function (words) {
    var sentence = words.reduce(function(a, b) {
	return a + ' ' + b;
    });
    return sentence;

  };

  module.exports = sentencify;  // DO NOT CHANGE THIS
})();
