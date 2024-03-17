

/* Brut Force Approach */
/* function maxSumSubarray(list, k) {
  let max = 0;
  for (let i = 0; i < list.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < k + 1; j++) {
      sum += list[j]
      if (sum > max) {
        max = sum
      }
    }
  }
  return max
} */

const maxSumSubarray = (nums, k) => {
  let max = 0;
  let currentMax = 0;

  for (let i = 0; i < k; i++) {
    max += nums[i]
  }
  currentMax = max;

  for (let i = k; i < nums.length; i++) {
    currentMax += nums[i] - nums[i - k]
    max = Math.max(currentMax, max)
  }
  return max

}

/* Sliding window Approach */



console.log(maxSumSubarray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))