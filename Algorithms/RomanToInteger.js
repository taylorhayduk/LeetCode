var values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanToInt = function(s) {
  s = s.split('');
  var result = 0;
  for (var i = 0; i < s.length - 1; i++) {
	if (values[s[i]] >= values[s[i+1]]) {
    	result = result + values[s[i]];
    }
    else {
      result = result + (values[s[i+1]] - values[s[i]]);
      i++;
    } 
  }
  if (values[s[s.length-2]] >= values[s[s.length - 1]]  || s.length == 1) {
  	result = result + (values[s[s.length-1]]);
  }
  return result;
};
