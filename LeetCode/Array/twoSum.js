var twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let result = target - nums[i];
    if (map[result]) {
      return [map[result], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [];
};
console.log(twoSum([2, 7, 11, 15], 9))