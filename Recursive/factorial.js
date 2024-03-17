/* 
factorial
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.
*/


/* Naive Solution 
Certainly! This version of the `factorial(number)` function calculates the factorial of a given number using an iterative approach with a `for` loop.

### Time Complexity:

The function uses a `for` loop that iterates `number` times. Each iteration involves a single multiplication operation, which takes constant time \(O(1)\). Therefore, the overall time complexity is \(O(\text{number})\) or more simply \(O(n)\), where \(n\) is the input number.

### Space Complexity:

In this version, you're using a single variable `output` to store the result, and the space required for this variable is constant. Therefore, the space complexity is \(O(1)\).

To summarize:
- Time Complexity: \(O(n)\)
- Space Complexity: \(O(1)\)

This version is more space-efficient compared to the recursive version, which has a space complexity of \(O(n)\) due to the recursive call stack. Would you like to know more about the trade-offs between iterative and recursive solutions?

*/

function factorial(number){
  let output = 1
  for (let i = number; i > 0; i-- ){
    output*=i
  }
  return output
}

/* Recursive Solution
Certainly! Let's analyze the time and space complexity of the `factorial(number)` function.

### Time Complexity:

The function makes a recursive call \( n-1 \) times for an input \( n \). Each recursive call takes constant time \( O(1) \) because it involves a single multiplication and a subtraction operation. Therefore, the overall time complexity is \( O(n) \), where \( n \) is the input number.

### Space Complexity:

Each recursive call adds a new layer to the call stack. The maximum depth of the stack is \( n \), so the space complexity is also \( O(n) \).

To summarize:
- Time Complexity: \( O(n) \)
- Space Complexity: \( O(n) \)

Would you like to know more about optimizing this function or other aspects of recursion?

*/

function factorial(number) {
  if (!number) return 1
  if (number === 1) {
    return 1
  }
  return number * factorial(number-1)
}




console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(4))
console.log(factorial(7))

