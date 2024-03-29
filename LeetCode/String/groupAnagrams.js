/* 
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/


var groupAnagrams = function (strs) {
  let map = new Map()
  let output = []
  for (let i = 0; i < strs.length; i++) {
    let sortedString = strs[i].split("").sort().join("")
    if (!map.has(sortedString)) {
      map.set(sortedString, [strs[i]])
    } else {
      map.set(sortedString, [...map.get(sortedString), strs[i]])
    }
  }
  for(const [key, value] of map){
    output.push(value)
  }
  return output
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))























