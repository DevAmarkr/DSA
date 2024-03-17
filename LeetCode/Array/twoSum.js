var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i]
    if (map.has(result)) {
      return [i, map.get(result)]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
};
console.log(twoSum([2, 7, 11, 15], 9))