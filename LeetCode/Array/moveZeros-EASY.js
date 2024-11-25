/* 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

// var moveZeroes = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       let popedElement = nums.splice(i, 1)
//       nums.push(...popedElement)
//     }
//   }
//   return nums
// };

// var moveZeroes = function (nums) {
//   let index = 0;
//   for(let i = 0; i < nums.length; i++){
//     const num =  nums[i]
//     if(num !== 0 ){
//       nums[index] = num
//       index++
//     }
//   }
// for(let i  =  index; i < nums.length; i++){
//   nums[i] = 0 
// }
//   return nums
// };


var moveZeroes = function (nums) {
  // let output = new Array(nums.length).fill(0);
  let tracker = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
       nums[tracker] = nums[i]
       tracker++
    }
  }
  for(let i = tracker; i < nums.length; i++){
    nums[i] = 0
  }
  return nums
};

console.log(moveZeroes(([0, 1, 0, 3, 12])))