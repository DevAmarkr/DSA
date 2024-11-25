/* 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:
1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
*/

var sortedSquares = function (nums) {
  let result = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] * nums[i]
  }

  let head = 0, tail = nums.length - 1;
  for (let pos = nums.length - 1; pos >= 0; pos--) {
    if (nums[head] > nums[tail]) {
      result[pos] = nums[head]
      head++
    } else {
      result[pos] = nums[tail];
      tail--
    }
  }
  return result
};

console.log(sortedSquares([-4, -1, 0, 3, 10]))


















