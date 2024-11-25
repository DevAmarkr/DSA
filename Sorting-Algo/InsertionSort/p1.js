

let currentValue = nums[i]//?ṣṣṣṣṣ ṣ
function insertionSort(nums) {
  let count = 0
  for (let i = 1; i < nums.length; i++) {
    let j;
    for (j = i - 1; j >= 0 && nums[j] > currentValue; j--) {
      nums[j + 1] = nums[j]
      count++
    }
    nums[j + 1] = currentValue
  }
  console.log(count)
  return nums
}
console.log(insertionSort([1, 2, 3, 4, 0]))


