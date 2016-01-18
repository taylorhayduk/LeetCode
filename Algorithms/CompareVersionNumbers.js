/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var v1 = version1.split('.');
  var v2 = version2.split('.');
  var length = v1.length > v2.length ? v1.length : v2.length;

  for (var i = 0; i < length; i++) {
    var a = Number(v1[i]) || 0;
    var b = Number(v2[i]) || 0;
    if (a !== b) {
      return a > b ? 1 : -1;
    }
  }
  return 0
};