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
                  current = swap[1];
              } else {
                  if (swap[1] === current) {
                      current = swap[0];
                  }
                }
          }
          return current;

  };
}
  module.exports = BallFollower; // DON'T ALTER THIS
})();
