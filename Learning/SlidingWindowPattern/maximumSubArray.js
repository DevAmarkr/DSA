/* Maximum Sum Subarray: Given an array of integers and a number 
n, find the maximum sum of any contiguous subarray of size 
*/

/* Naive Solution  */

/* function maxSumSubarray(list, size){
  let maxSum = -Infinity
  for(let i = 0; i <= list.length - size; i++ ){
      let temMax = 0
      for(let j = i; j < i + size; j++){
        temMax += list[j]
      }
      if(temMax > maxSum){
        maxSum = temMax
      }
  }
  return maxSum
} */
2, 6, 9, 2, 1, 8, 5, 6, 3

/* Sliding window pattern strategy */


function maxSumSubarray(list, size) {
  let maxSum = 0
  let tempMax = 0
  for (let i = 0; i < size; i++) {
    maxSum += list[i]
  }
  tempMax = maxSum
  for (let i = size; i < list.length; i++) {
    tempMax += list[i]- list[i - size]
    maxSum = Math.max(maxSum, tempMax)
  }
  return maxSum
}





console.log(maxSumSubarray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //21
console.log(maxSumSubarray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));