/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle == "") {
    return 0;
  }
  for (var i = 0; i < haystack.length; i++) {
    var check = haystack.slice(i, i+needle.length);
    if (check === needle) {
      return i;
    }
  }
  return -1;
};
