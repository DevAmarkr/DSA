/* 
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */


/* Naive Solution 
Certainly! Let's analyze the time and space complexity of the `productOfArray(list)` function.

### Time Complexity:

The function uses a `for` loop that iterates through the array `list`, which has a length of \( n \). Each iteration involves a single multiplication operation, which takes constant time \( O(1) \). Therefore, the overall time complexity is \( O(n) \), where \( n \) is the length of the input array.

### Space Complexity:

The function uses a single variable `output` to store the result, and the space required for this variable is constant. Therefore, the space complexity is \( O(1) \).

To summarize:
- Time Complexity: \( O(n) \)
- Space Complexity: \( O(1) \)

Would you like to know more about optimizing this function or other aspects of algorithmic complexity?

*/

function productOfArray(list) {
  let output = 1;
  for (let i = 0; i < list.length; i++) {
    output *= list[i]
  }
  return output
}


/* Recursive Call
Certainly! This version of the `productOfArray(list)` function calculates the product of all the elements in an array `list` using a recursive approach.

### Function Explanation:

1. **Base Case**: `if (list.length === 0) { return 1 }` - If the array is empty, it returns 1.

2. **Recursive Case**: `return list[0] * productOfArray(list.slice(1))` - Multiplies the first element of the array with the product of the remaining elements, which is obtained through a recursive call.

### Time Complexity:

The function makes a recursive call \( n \) times for an array of length \( n \). Each recursive call involves slicing the array, which takes \( O(n) \) time. Therefore, the overall time complexity is \( O(n^2) \), where \( n \) is the length of the input array.

### Space Complexity:

Each recursive call adds a new layer to the call stack. The maximum depth of the stack is \( n \), so the space complexity is \( O(n) \).

To summarize:
- Time Complexity: \( O(n^2) \)
- Space Complexity: \( O(n) \)

Would you like to know more about optimizing this function or other aspects of recursion?
*/

function productOfArray(list) {
  if (list.length === 0) {
    return 1
  }
  return list[0] * productOfArray(list.slice(1))
}



console.log(productOfArray([1, 2, 3]))//6
console.log(productOfArray([1, 2, 3, 10]))//60

