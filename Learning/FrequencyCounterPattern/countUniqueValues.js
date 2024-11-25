/* 
 implement a function called countUniqueValues which accepts a sorted array,
 and counts the unique values in the array. There can be negative number in
 the array, but it will always be sorted

*/

function countUniqueValues(list) {
  let map = {}
  for (let i = 0; i < list.length; i++) {
    if (!map[list[i]]) {
      map[list[i]] = 1
    }
  }
  return Object.keys(map).length
}





console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1, 0, 1]))
