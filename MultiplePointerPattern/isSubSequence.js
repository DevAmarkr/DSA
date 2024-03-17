function isSubsequence(str1, str2) {
  let i_index = 0;
  let k_index = 0
  while (k_index < str2.length) {
    if (str2[k_index] === str1[i_index]) i_index++
    if (i_index === str1.length) return true
    k_index++
  }
  return false
}
console.log(isSubsequence('hello', 'hello world')) 
console.log(isSubsequence('sing', 'sting')) 
console.log(isSubsequence('abc', 'abracadabra')) 
console.log(isSubsequence('abc', 'acb')) 