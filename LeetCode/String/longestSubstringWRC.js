/* 
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

*/

// function longestSubstringWithoutRepeatingCharacter(str) {
//   let longestLength = 0
//   for (let i = 0; i < str.length; i++) {
//     let set = new Set()
//     for (let j = i; j < str.length; j++) {
//       let char = str[j]
//       if (set.has(char)) {
//         break;
//       }
//       set.add(char)
//       longestLength = Math.max(longestLength, set.size)
//     }
//   }
//   return longestLength

// }

/* function longestSubstringWithoutRepeatingCharacter(str) {
  let longestLength = 0
  for (let i = 0; i < str.length; i++) {
    let set = new Set()
    for (let j = i; j < str.length; j++) {
      let char = str[j]
      if (set.has(char)) {
        break;
      }
      set.add(char)
      longestLength = Math.max(longestLength, set.size)
    }
  }
  return longestLength

} */

function longestSubstringWithoutRepeatingCharacter(str) {
  let left = 0, right = 0, longest = 0
  let set = new Set();

  while (right < str.length) {
    let char = str[right];
    if (set.has(char)) {
      set.delete(str[left])
      left++
    } else {
      set.add(char)
      right++
      longest = Math.max(longest, set.size)
    }
  }
  return longest

}





console.log(longestSubstringWithoutRepeatingCharacter("abcabcbb"))

