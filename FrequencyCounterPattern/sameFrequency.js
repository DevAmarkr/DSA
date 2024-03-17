/* 
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
Sample Input:
sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

/* Naive Solution
overall time complexity is O(n×m)
overall space complexity is O(n+m)
*/


/* function sameFrequency(int1, int2) {
  int1 = int1.toString().split('')
  int2 = int2.toString().split('')
  if (int1.length !== int2.length) return false
  for (let i = 0; i < int1.length; i++) {
    let currentIndex = int2.indexOf(int1[i])
    if (currentIndex === -1) {
      return false
    }
    int2.splice(currentIndex, 1)
  }
  return true
} */

/* By using fequency counter pattern 
overall time complexity is O(n+m)
overall space complexity is O(n+m).
*/

function sameFrequency(int1, int2){
  int1 = int1.toString().split('')
  int2 = int2.toString().split('')
  if (int1.length !== int2.length) return false
   let map1 =  {}
   let map2 = {}
   for (let val of int1){
      map1[val]  =  (map1[val] || 0) + 1
   }

  for (let val of int2) {
    map2[val] = (map2[val] || 0) + 1
  }
   
  for (let key in map1){
    if(!map2[key]){
      return false
    }
  }
  return true
} 


/* By using fequency counter pattern by using single has
overall time complexity is O(n+m)
overall space complexity is O(n+m).
*/


/* 
The optimized version primarily improves space complexity by using a single frequency map instead of two. While the time complexity remains O(n+m) for both versions, the optimized version uses less memory, which can be beneficial in scenarios where space is a concern.

Here's a quick comparison:

Original Version
Time Complexity: O(n+m)
Space Complexity: O(n+m) (Two separate maps for int1 and int2)

Optimized Version
Time Complexity: O(n+m)
Space Complexity: O(max(n,m)) (One map for both int1 and int2)

The difference might not be significant for small inputs, but as the size of the input grows, the optimized version will consume less memory. This could be particularly useful in constrained environments or when the function is part of a larger, more complex algorithm where space optimization is crucial.
*/

// function sameFrequency(int1, int2) {
//   int1 = int1.toString().split('')
//   int2 = int2.toString().split('')
//   if (int1.length !== int2.length) return false
//   let map1 = {}
//   for (let val of int1) {
//     map1[val] = (map1[val] || 0) + 1
//   }

//   for (let val of int2) {
//     if (!map1[val]) {
//       return false
//     }
//     map1[val]-= 1;
//   }
//   return true
// }




console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(3589578, 5879385))
console.log(sameFrequency(22, 222))
