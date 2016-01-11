/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  var result = nums.length;
  var hash = {};
  nums.forEach(function(number){
    hash[number] = true;
  });
  for (var i = 1; i <= nums.length+1; i++) {
    if (!hash[i]) {
      return i;
    }
  };
};