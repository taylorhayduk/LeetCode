/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  var found = false;
  var recursedAt = {};
  var recurse = function(string) {
    if (found) {
      return;
    }
    if (!string.length) {
      found = true;
    } else {
      for (var i = string.length; i >= 1; i--) {
        if (wordDict.has(string.slice(0,i)) && (recursedAt[i] === undefined)) {
          recurse(string.slice(i));
          recursedAt[i] = true;
        }
      }
    }
  }
  recurse(s);
  return found;
};
