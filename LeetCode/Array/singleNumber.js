


// soultion

var singleNumber = function (nums) {
  let singleNumber = null;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        break;
      } else {
        singleNumber = nums[i]
      }
    }
  }
  return singleNumber
};

singleNumber([2, 2, 1])
// singleNumber([2, 2, 1])
// singleNumber([2, 2, 1])

