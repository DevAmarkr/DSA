function binarySearch(array, val) {
  // add whatever parameters you deem necessary - good luck!
  let right = 0;
  let left = array.length - 1;
  let mid = Math.floor((right + left) / 2)
  console.log(right, left, mid)

  while ((right === mid) || (array[mid] !== val)) {
    console.log(mid)
    if (array[mid] === val) {
      return mid
    }
    if (array[mid] < val) {
      right = mid+1;
    }
    if (array[mid] > val) {
      left = mid-1
    }
    mid = Math.floor((right + left) / 2)  
  }
  return -1
}
console.log(binarySearch([1, 2, 3, 4, 5], 2)) // 1
console.log(binarySearch([1, 2, 3, 4, 5], 3)) // 2
console.log(binarySearch([1, 2, 3, 4, 5], 5)) // 4
console.log(binarySearch([1, 2, 3, 4, 5], 6)) // -1
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1