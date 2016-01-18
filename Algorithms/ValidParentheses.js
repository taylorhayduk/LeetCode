/**
 * @param {string} s
 * @return {boolean}
 */
var closers = {
  '(': ')',
  '[': ']',
  '{': '}',
}

var isValid = function(s) {
  s = s.split('');
  var stack = [];
  for (var i = 0; i < s.length; i++) {
    var currentOpener = closers[s[i]];
    if (currentOpener) {
      stack.push(currentOpener);
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};