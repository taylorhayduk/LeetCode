/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  var range = [];
  for (var i = 1; i <= n; i++) {
    range.push(i);
  }
  var result;
  var recurse = function(range, set) {
    if (range.length && !result){
      for (var i = 0; i < range.length && !result; i++) {
        var rangeCopy = range.slice(0,i).concat(range.slice(i+1));
        var setCopy = set.concat(range[i]);
        recurse(range.slice(0,i).concat(range.slice(i+1)), set.concat(range[i]));
      }
    } else {
      if (k === 0) {
        result = set;
      }
      k--;
    }
  }
  recurse(range, []);
  return result ? result.join('') : n;
};
