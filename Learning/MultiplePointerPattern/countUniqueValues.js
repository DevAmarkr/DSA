/* 
 implement a function called countUniqueValues which accepts a sorted array,
 and counts the unique values in the array. There can be negative number in
 the array, but it will always be sorted

*/

function countUniqueValues(list) {
  let left = 0;
  let right = 1
  while (right < list.length) {
    if (list[left] === list[right]) {
      right++
    }
    if (list[left] !== list[right]) {
      left++
      list[left] = list[right]
    }
  }
  return left
}





console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))
