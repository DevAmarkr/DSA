


function selectionSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) minIndex = j
    }
    if (minIndex !== i) [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]]
  }
  return nums
}
console.log(selectionSort([5, 2, 3, 1]))
console.log(selectionSort([8, 1, 2, 3, 4, 5, 6, 7]))