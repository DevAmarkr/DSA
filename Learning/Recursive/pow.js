/* 
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/


/* Naive Solution 

Certainly! This version of the `pow(base, exponent)` function calculates the power of a number using a loop instead of recursion.

### Time Complexity

The function uses a `for` loop that iterates `exponent` times. Each iteration involves a single multiplication operation, which takes constant time \(O(1)\). Therefore, the overall time complexity is \(O(\text{exponent})\) or more simply \(O(n)\), where \(n\) is the exponent.

### Space Complexity

In this version, you're using a single variable `output` to store the result, and the space required for this variable is constant. Therefore, the space complexity is \(O(1)\).

To summarize:
- Time Complexity: \(O(n)\)
- Space Complexity: \(O(1)\)

This version is more space-efficient compared to the recursive version, which has a space complexity of \(O(n)\) due to the recursive call stack. Would you like to know more about the trade-offs between iterative and recursive solutions?
*/
// function pow(base, exponent) {
//   let output = 1
//   for (let i = 1; i <= exponent; i++) {
//     output *= base
//   }
//   return output
// }

/* Recursive Solution

Certainly! The function `pow(base, exponent)` calculates the power of a number by multiplying the base with itself `exponent` times. It does this recursively.

### Time Complexity

The function makes a recursive call `exponent - 1` times. Each recursive call takes constant time \(O(1)\) because it involves a single multiplication and a subtraction operation. Therefore, the overall time complexity is \(O(\text{exponent})\) or more simply \(O(n)\), where \(n\) is the exponent.

### Space Complexity

Each recursive call adds a new layer to the call stack. The maximum depth of the stack is `exponent`, so the space complexity is also \(O(\text{exponent})\) or \(O(n)\).

To summarize:
- Time Complexity: \(O(n)\)
- Space Complexity: \(O(n)\)

Would you like to know more about optimizing this function or other aspects of recursion?

*/

function pow(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent === 1) {
    return base
  }
  return base * pow(base, exponent - 1)
}

console.log(pow(5, 3))
console.log(pow(2, 2))
console.log(pow(2, 4))