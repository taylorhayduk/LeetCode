/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var max;
  if (!strs) {
    return;
  }
  for (var i = 0; i < strs[0].length; i++) {
    var sameAtIndex = true;
    strs.forEach(function(string){
      if (string[i] !== strs[0][i]) {
        sameAtIndex = false;
      }
    })
    if (sameAtIndex) {
      max = i;
    } else {
      break;
    }
  }
  return strs[0].slice(0,max+1);
};