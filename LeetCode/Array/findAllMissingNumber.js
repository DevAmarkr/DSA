var findDisappearedNumbers = function (nums) {
  //   let output = [];
  //   nums = nums.sort()
  //   let index = 0;
  //   while (index < nums.length - 1) {
  //     const expectedValue = nums[index] + 1
  //     const nextValue = nums[index + 1]
  //     if (nums[index] === nextValue) {
  //       index++
  //       continue
  //     }
  //     if (expectedValue !== nextValue) {
  //       output.push(expectedValue);
  //     }



  //     index++
  //   }
  //   return output

  let map = {}
  for (let value of nums) {
    map[value] = 1
  }
  let output = []
  for (let i = 1; i <= nums.length; i++) {
    if (!map[i]) {
      output.push(i)
    }
  }
  return output
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))
// [1,2,2,3,3,4 ,_, _, 7,8]

