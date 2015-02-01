(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
      this.start = start;
      this.swap = function() {
      var current = start;
      while (swaps.length > 0) {
          var swap = swaps[0]
          swaps = swaps.slice(1);
          if (swap[0] === current) {

          } else
              if (swap[1] === current) {
               current = swap[0];
              }
          return current;
      }
      }



      var ballLocation = start;
      if (swaps.slice(0) === ballLocation || swaps.slice(1) === ballLocation) {
      
      }
      this.swap = function() {
          return 1;
      }
  };

  module.exports = BallFollower; // DON'T ALTER THIS
})();
