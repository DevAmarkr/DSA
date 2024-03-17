/* Naive Solution 
 time complexity = O(n2) or worst
 space complexity = O(1)
*/

/* function areThereDuplicates(...args) {
  for (let i = 0; i < args.length - 1; i++) {
    for (let j = i + 1; j < args.length; j++) {
      if (args[i] === args[j]) {
        return true
      }
    }
  }
  return false
} */


/* Multiple pointer startegy

Time Complexity
Sorting takes O(nlogn) time.
The loop takes O(n) time. So, the overall time complexity is O(nlogn).

Space Complexity
No additional data structures are used, so the space complexity is O(1).
This version uses constant space but has a higher time complexity due to sorting. If the input is guaranteed to be sorted, then the time complexity would effectively be O(n) with O(1) space.
*/
/* 
function areThereDuplicates(...args) {
  args = args.sort();
  let left = 0;
  let right = left + 1;
  while (right < args.length) {
    if (args[left] === args[right]) {
      return true;
    }
    left++;
    right++;
  }
  return false
} */
console.log(areThereDuplicates(1, 2, 3, 4))