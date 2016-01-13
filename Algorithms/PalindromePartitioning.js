/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalendrome = function(s) {
  var letters = s.split('');
  for (var i = 0; i < letters.length/2; i++) {
    if (letters[i] !== letters[letters.length-i-1]) {
      return false;
    }
  }
  return true;
}

var partition = function(s) {
  var results = [];
  var recurse = function(remaining, result) {
    if (remaining.length) {
      for (var i = 1; i <= remaining.length; i++) {
        var possiblePalendrome = remaining.slice(0,i);
        if (isPalendrome(possiblePalendrome)) {
          recurse(remaining.slice(i), result.concat(possiblePalendrome));
        }
      }
    } else {
      results.push(result);
    }
  }
  recurse(s, []);
  return results;
};