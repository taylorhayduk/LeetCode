/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var result = Number(Math.abs(x).toString().split("").reverse().join(""));
  return result * ((x > 0) ? 1 : -1);
};

// Below is what's needed to pass tests to take into
// consideration intergers larger or smaller than 32 bits.
// var reverse = function(x) {
//   var result = Number(Math.abs(x).toString().split("").reverse().join(""));
//   result = result * ((x > 0) ? 1 : -1)
//   if (result > 2147483647 || result < -2147483647) {
//     return 0;
//   }
//   return result;
// };