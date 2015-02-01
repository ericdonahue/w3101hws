(function () {
 'use strict';

  var sentencify = function (words) {
    var sentence;
    var arrayLength = words.length;
    if (arrayLength === 0) {
        return '';
    }
    sentence = words.reduce(function(a, b) {
        return a + ' ' + b;
    });
    return sentence;
  };

 module.exports = sentencify;  // DO NOT CHANGE THIS
 })();
