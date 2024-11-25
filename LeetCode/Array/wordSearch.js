

var exist = function (board, words) {
  let bol = null
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    console.log(word)
    for (let elem of board) {
      if (elem.indexOf(word) !== -1) {
        bol = true
        break
      } else {
        bol = false
      }
    }
  }
  return bol
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))
// [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word = "ABCCED"