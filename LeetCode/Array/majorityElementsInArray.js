/* 
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
*/

/* var majorityElement = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] = map[nums[i]] + 1
    } else {
      map[nums[i]] = 1
    }
  }
  let maxValue = 0
  let maxKey = null
  for (let [key, value] of Object.entries(map)) {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key
    }
  }
  return maxKey
};
 */



  var majorityElement = function (nums) {
    let candidates = null;
    let count = 0;

    for (let num of nums) {
      if (count === 0) {
        count++;
        candidates = num
      } else if (num === candidates) {
        count++
      } else {
        count--
      }
    }
    return candidates
  };

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement([6, 5, 5]))