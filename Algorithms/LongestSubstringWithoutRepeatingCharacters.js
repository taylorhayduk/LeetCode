/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    if (s.length === 0) {
      return 0;
    }
    if (s.length === 1) {
      return 1;
    }
    for (var i = 0; i < s.length; i++) {
      for (j = i+1; j < s.length; j++) {
        var substr = s.slice(i, j);
        if (substr.indexOf(s[j]) === -1) {
          max = max > substr.length ? max : substr.length+1;
        } else {
          break;
        }
      }
    }
    return max || 1;
};