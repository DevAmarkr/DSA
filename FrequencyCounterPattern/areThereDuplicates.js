/* Naive Solution 
 time complexity = O(n2) or worst
 space complexity = O(1)
*/

/* function areThereDuplicates(...args) {
  for (let i = 0; i < args.length - 1; i++) {
    for (let j = i + 1; j < args.length; j++) {
      if (args[i] === args[j]) {
        return true
      }
    }
  }
  return false
} */

function areThereDuplicates(...args){
  let map = {}
   for(let val of args){
     if(map[val]){
      return true
     }
     map[val] = 1
    }
    return false
}
console.log(areThereDuplicates(1, 2, 3, 4))