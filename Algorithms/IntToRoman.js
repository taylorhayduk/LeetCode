/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000;
    var romans = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    }

    num = num.toString().split('');
    var multiplier = 1;
    var result = '';

    while (num.length) {
      current = num.pop();
      if (current == 4) {
        result = romans[1*multiplier] + romans[5*multiplier] + result;
      } else if (current == 9) {
        result = romans[1*multiplier] + romans[10*multiplier] + result;
      } else if (current > 0) {
        var temp = '';
        if (current >= 5) {
          temp = romans[5 * multiplier];
          current = current -5;
        }
        while(current) {
          temp = temp + romans[multiplier];
          current--;
        }
        result = temp + result;
      }
      multiplier *= 10;
    }
    return result;
};