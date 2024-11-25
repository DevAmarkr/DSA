// Write a function called sum zero which accepts a sorted array of integers. 
// The function should find the first pair where the sumis 0,
//  Return an array that includes both values that sum to zero or 
// undefined if a pairdoes not exist.

// naive solution

// function sumZero(list) {
//   if (!list.length) return -1
//   for (let i = 0; i < list.length; i++) {
//     for (let j = i + 1; j < list.length; j++) {
//       if (list[i] + list[j] === 0) {
//         return [list[i], list[j]]
//       }
//     }
//   }
//   return undefined
// }

// Solution based on multiple pointer strategy
function sumZero(list) {
  if (!list.length) return -1
  let leftPointer = 0;
  let rightPointer = list.length - 1
  while (leftPointer < rightPointer) {
    if (list[leftPointer] + list[rightPointer] === 0) {
      return [list[leftPointer], list[rightPointer]]
    }
    else if (list[leftPointer] + list[rightPointer] < 0) {
      leftPointer++
    }else{
      rightPointer--
    }
  }
  return undefined
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))
console.log(sumZero([-2, 0, 1, 3]))
console.log(sumZero([1, 2, 3]))