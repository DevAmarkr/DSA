
/* 
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
*/



/* Naive Solution */

/* function maxSubarraySum(list, number) {
  if (list.length < number) return null;
  let maxSum = -Infinity
  console.log(list.length - number)
  for (let i = 0; i <= list.length - number; i++) { // O(n)
    let tempSum = 0;
    for (let j = i; j < i + number; j++) {  // O(m)
      tempSum += list[j];
    }
    if (tempSum > maxSum) {
      maxSum = tempSum
    }
  }
  return maxSum
} */



function maxSubarraySum(list, number) {
  if (list.length < number) return null
  let maxSum = 0
  let tempSum = 0
  for (let i = 0; i < number; i++) {
    tempSum += list[i]
  }
  maxSum = tempSum
  for (let i = number; i < list.length; i++) {
    tempSum = tempSum - list[i - number] + list[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}







console.log(maxSubarraySum([100, 200, 300, 400], 2))
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
console.log(maxSubarraySum([2, 3], 3))

