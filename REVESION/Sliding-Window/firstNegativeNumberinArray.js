/* 
First Negative Number in every Window of Size K 

Test Case 1:

Input: arr = [1, -2, 3, -4, 5], k = 2
Expected Output: [-2, -4]
Explanation: The windows of size 2 are [1, -2] and [-2, 3]. The first negative number in each window is -2 and -4, respectively.
Test Case 2:

Input: arr = [3, -7, -4, 5, 1, 6, -2], k = 3
Expected Output: [-7, -7, -4, -2]
Explanation: The windows of size 3 are [3, -7, -4], [-7, -4, 5], [-4, 5, 1], and [5, 1, 6]. The first negative number in each window is -7, -7, -4, and -2, respectively.
Test Case 3:

Input: arr = [-1, -2, -3, -4, -5], k = 2
Expected Output: [-1, -2, -3, -4, -5]
Explanation: Since all elements in the array are negative, the first negative number in each window of size 2 is the first element of each window.
Test Case 4:

Input: arr = [1, 2, 3, 4, 5], k = 2
Expected Output: [null, null, null, null]
Explanation: Since there are no negative numbers in any window of size 2, the output for each window is null.
Test Case 5:

Input: arr = [1, -1, 2, -2, 3, -3], k = 4
Expected Output: [-1, -1, -2, -3]
Explanation: The windows of size 4 are [1, -1, 2, -2], [-1, 2, -2, 3], and [2, -2, 3, -3]. The first negative number in each window is -1, -1, -2, and -3, respectively.
*/


/* 
Brute Force Approach
*/


/* function firstNegativeNumber(list, k) {
  let output = [];

  for (let i = 0; i <= list.length - k; i++) {
    for (let j = i; j < i+k ; j++) {
      if (list[j] < 0) {
        output.push(list[j])
        break
      }
    }
  }
  return output
} */


const firstNegativeNumber = (list, k) => {
  let output = [];
  for (let i = 0; i < k ; i++) {
    console.log(list[i])
    if (list[i] < 0)
      output.push(list[i])
  }

  for(let i = k; i <= list.length-k; i++){
    console.log(list[i])
    if(list[i] < 0){
      output.push(list[i])
      break
    }
  }
  console.log(output)
}

console.log(firstNegativeNumber([1, -2, 3, -4, 5], 2))//[-2, -4]
// console.log(firstNegativeNumber([3, -7, -4, 5, 1, 6, -2], 3))//[-7, -7, -4, -2]















