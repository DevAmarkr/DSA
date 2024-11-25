/* 
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false


*/

/* Naive Solution 
Certainly! Let's analyze the time and space complexity of the `averagePair` function.

### Time Complexity
- The outer loop iterates n-1 times, where n is the length of the list.
- The inner loop iterates n times for each iteration of the outer loop.

So, the overall time complexity is O(n^2).

### Space Complexity
- The function uses a constant amount of extra space for variables like `i`, `j`, and `average`.

So, the overall space complexity is O(1).

The function has a quadratic time complexity, which may not be efficient for large lists. The space complexity is constant, which is good. Would you like to explore optimizing this function?
*/

/* function averagePair(list, target) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      let average = list[i] + list[j] / 2
      if (average === target) {
        return true
      }
    }
  }
  return false
} */



/* function averagePair(list, target) {
  if (!list.length) return false
  let startIndex = 0;
  let lastIndex = list.length - 1
  while (startIndex < lastIndex) {
    let average = (list[startIndex] + list[lastIndex]) / 2
    if (average === target) {
      return true
    }
    else if (average < target) {
      startIndex++
    } else {
      lastIndex--
    }
  }
  return false
} */

function averagePair(str1, str2){
  
}




console.log(averagePair([1, 2, 3], 2.5))// true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) // false
console.log(averagePair([], 4))// false