/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  for (var i = 0; m != n; i++) {
    m = m >> 1;
    n = n >> 1;
  }
  return n << i;
};

console.log(rangeBitwiseAnd(5,7));


0111
1000
1001

