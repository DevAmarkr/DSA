
// Naive Solution

// function same(list1, list2) {
//   if (list1.length !== list2.length) {
//     return false
//   }
//   for (let i = 0; i < list1.length; i++) {
//     let correctIndex = list2.indexOf(list1[i] ** 2)
//     if (correctIndex === -1) {
//       return false
//     }
//     list2.splice(correctIndex, 1)
//   }
//   return true
// }

//  Frequency Counter Solution

function same(list1, list2) {
  if (list1.length !== list2.length) {
    return false
  }
  let map1 = {}
  let map2 = {}
  for (let item of list1) {
    map1[item] = (map1[item] || 0) + 1
  }
  for (let item of list2) {
    map2[item] = (map2[item] || 0) + 1
  }
  for (let key in map1) {
    let square = Math.pow(key, 2)
    if (map1[key] !== map2[square]) {
      return false
    }
  }
  return true
}
console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 3], [ 1, 9]))
console.log(same([1, 2, 1], [4, 4,1]))