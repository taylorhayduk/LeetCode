/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  var powers = 1;
  while (powers < n) {
    powers*=3;
  }
  return powers === n;
};