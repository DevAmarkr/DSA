/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
*/

// var longestCommonPrefix = function (strs) {
//   let prefix = ""

//   for (let i = 0; i < strs[0].length; i++) {
//     let character = strs[0][i];
//     console.log(character)
//     for (let j = 0; j < strs.length; j++) {
//       let nextWord = strs[j][i];
//       if (character !== nextWord) {
//         return prefix
//       }

//     }
//     prefix = prefix + character
//   }
//   return prefix
// };



var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ""; // Edge case: empty array

  // Sort the array of strings lexicographically
  strs.sort();

  // Compare the first and last strings in the sorted array to find the common prefix
  let firstStr = strs[0];
  let lastStr = strs[strs.length - 1];
  let prefix = "";

  // Compare characters of the first and last strings
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      prefix += firstStr[i]; // Append the character to the prefix
    } else {
      break; // Stop comparing if characters don't match
    }
  }

  return prefix;
};

console.log(longestCommonPrefix((["flower", "flow", "flight"])))