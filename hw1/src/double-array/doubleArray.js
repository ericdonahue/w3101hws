(function () {
  'use strict';

  var doubleArray = function(arrayToDouble) {
    function double(item) {
        var doubledItem = item * 2;
	return doubledItem;
    }
    var newArray = arrayToDouble.map(double);
    return newArray;
//    var arrayMap = arrayToDouble.prototype.map;
//    var mapDoubled = map.double(arrayToDouble, function(x) {
//        var xDoubled = x * 2;
//	return xDoubled;
//    });
//    return mapDoubled;
  };

  module.exports = doubleArray;

})();
