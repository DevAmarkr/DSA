// const productOfArray = (nums) => {
//   let output = []
//   let allElementProduct = 1
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if(j !== i){
//         allElementProduct *= nums[j]
//       }
//     }
//     output.push(allElementProduct)
//     allElementProduct = 1

//   }
//   return output
// }



const productOfArray = (nums) => {
  const left = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1]
  }

  const right = new Array(nums.length).fill(1);

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1]
  }
  let ans = []
  for (let i = 0; i < left.length; i++) {
    ans[i] = left[i] * right[i]
  }
  return ans

  // const n = nums.length;
  // let ans = new Array(n).fill(1);

  // // Compute left product and store in ans
  // for (let i = 1; i < n; i++) {
  //   ans[i] = ans[i - 1] * nums[i - 1];
  // }

  // // Compute right product on the fly and multiply with ans
  // let rightProduct = 1;
  // for (let i = n - 1; i >= 0; i--) {
  //   ans[i] *= rightProduct;
  //   rightProduct *= nums[i];
  // }

  // return ans;
}
console.log(productOfArray([1, 2, 3, 4]))
