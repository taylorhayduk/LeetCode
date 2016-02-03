/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  function findNext(string) {
    var result = "";
    var current = string[0];
    var count = 0;
    for (var i = 0; i <= string.length; i++) {
      if (string[i] === current) {
        count++;
      } else {
        result = result + count.toString() + current;
        current = string[i];
        count = 1;
      }
    }
    return result;
  }
  var result = "1";
  while (n > 1) {
    result = findNext(result);
    n--;
  }
  return result;
};