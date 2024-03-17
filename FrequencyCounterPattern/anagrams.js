
// Naive Solution

// function anagrams(str1, str2) {
//   if ((!str1 || !str2) || (str1.length !== str2.length)) {
//     return false
//   }
//   str1 =  str1.split('')
//   str2 = str2.split('')
  
//   for (let i = 0; i < str1.length; i++) {
//     let correctIndex = str2.indexOf(str1[i])
//     if(correctIndex === -1){
//       return false
//     }
//     str2.splice(correctIndex, 1)
//   }
//   return true`
// }

// Solution using frequency counter
function anagrams(str1, str2) {
  if ((!str1 || !str2) || (str1.length !== str2.length)) {
    return false
  }
  let map1 = {}
  let map2 = {}
  for (let val of str1) {
    map1[val] = (map1[val] || 0) + 1
  }
  for (let val of str2) {
    map2[val] = (map2[val] || 0) + 1
  }
  for (let key in map1) {
    if (map1[key] !== map2[key]) {
      return false
    }
  }
  return true
}

console.log(anagrams('', ''))
console.log(anagrams('aaz', 'zza'))
console.log(anagrams('anagram', 'nagaram'))
console.log(anagrams('rat', 'car'))
console.log(anagrams('awesome', 'awesom'))
console.log(anagrams('qwerty', 'qeywrt'))
console.log(anagrams('texttwisttime', 'timetwisttext'))