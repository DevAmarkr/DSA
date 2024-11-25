/* 
Given a string s, return the longest palindromic substring in s.

Example 1:
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:
Input: s = "cbbd"
Output: "bb"

*/


var longestPalindrome = function (s) {
  if (s.length === 0) return '';

  let longest = '';
  for (let i = 0; i < s.length; i++) {
    // For odd length palindromes
    let palindromeOdd = expandAroundCenter(s, i, i);
    if (palindromeOdd.length > longest.length) {
      longest = palindromeOdd;
    }

    // For even length palindromes
    let palindromeEven = expandAroundCenter(s, i, i + 1);
    if (palindromeEven.length > longest.length) {
      longest = palindromeEven;
    }
  }

  return longest;
};

// Helper function to expand around center
function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  // Return the palindrome substring
  return s.slice(left + 1, right);
}

// Test the function
const s = "babad";
console.log(longestPalindrome(s));