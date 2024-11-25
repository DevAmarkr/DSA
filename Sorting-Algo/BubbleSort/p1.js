
/* 
  Implement loop with index i that starts from end of the array
  -  Implement inner loop with index j that starts from beginning og the loop
  -  if arr[j] is greater than arr[j+1] swap the position
  - At the end return the array
*/


function bubbleSort(list) {
  let count = 0
  let swap;
  for (let i = list.length; i > 0; i--) {
     swap = true
    for (let j = 0; j < i - 1; j++) {
      console.log(list, list[j], list[j + 1])
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp
        count++
        swap = false
      }
    }
    if(swap) break
  }
  console.log(count)
  return list
}

// console.log(bubbleSort([10, 2, 3, 8, 4]))// [2,3,4,8,10]
console.log(bubbleSort([8, 1, 2,3,4,5,6,7]))// [2,3,4,8,10]


