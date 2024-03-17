/* 
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 
*/

var validPalindrome = function (s) {
  function isPalindrome(s, leftIndex, rightIndex) {
    while (leftIndex < rightIndex) {
      if (s[leftIndex] !== s[rightIndex]) {
        return false
      } else {
        leftIndex++
        rightIndex--
      }
    }
    return true
  }
  let leftIndex = 0;
  let rightIndex = s.length - 1;
  while (leftIndex < rightIndex) {
    if (s[leftIndex] !== s[rightIndex]) {
      return isPalindrome(s, leftIndex + 1, rightIndex) || isPalindrome(s, leftIndex, rightIndex - 1)
    } else {
      leftIndex++
      rightIndex--
    }
  }
  return true
};


console.log(validPalindrome("abca"))
console.log(validPalindrome("aba"))
console.log(validPalindrome("abc"))
console.log(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"))