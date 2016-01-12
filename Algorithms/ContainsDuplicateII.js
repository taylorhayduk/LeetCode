/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var latestIndex = {};
  for (var i = 0; i < nums.length; i++) {
    var latest = latestIndex[nums[i]];
    if (latest !== undefined) {
      if ((i - latest) <= k) {
        return true;
      }
    }
    latestIndex[nums[i]] = i;
  } 
  return false;
};