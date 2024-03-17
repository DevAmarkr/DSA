/* 
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.
*/


var strStr = function (haystack, needle) {
  let [i, j, k] = [0, 0, 0]
  while (i < haystack.length) {
    while (needle[j] == haystack[k]) {
      j++
      k++
      if (j === needle.length) return i;
      if (k === haystack.length) return -1
    }
    if (needle[j] != haystack[k]) {
      i++
      j = 0;
      k = i
    }
  }
  return -1
};
/* 
var strStr = function(haystack, needle) {
    let count = 0;
    for (let i=0; i < haystack.length; i++) {
        const char = haystack[i];
        if (char === needle[count]) {
            count++;
        } else {
            i = count > 0 ? i - (count - 1) : i;
            count = 0;

            if (char === needle[count]) {
                count++;
            }
        }
         if (count === needle.length) {
            return i + 1 - count;
            }
        }
    return -1
};

*/
console.log(strStr("sadbutsad", "sad"))
console.log(strStr("leetcode", "leeto"))