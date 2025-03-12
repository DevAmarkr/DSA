// var backspaceCompare = function (s, t) {
//   let str1 = "";
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== "#") {
//       str1 += s[i]
//     } else {
//       str1 = str1.slice(0, -1)
//     }
//   }
//   let str2 = "";
//   for (let i = 0; i < t.length; i++) {
//     if (t[i] !== "#") {
//       str2 += t[i]
//     }
//     else {
//       str2 = str2.slice(0, -1)
//     }
//   }
//   let isSame = true
//   if (str1.length !== str2.length) {
//     return false
//   }
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== str2[i]) isSame = false
//   }
//   return isSame
// };
// console.log(backspaceCompare("ab#c", "ad#c"))
// console.log(backspaceCompare("ab##", "c#d#"))

var backspaceCompare = function (s, t) {
  let i = s.length - 1; // Pointer for string s
  let j = t.length - 1; // Pointer for string t

  // Keep comparing until both strings are fully processed
  while (i >= 0 || j >= 0) {
    // Find the next valid character in string s
    let skipS = 0;
    while (i >= 0 && (s[i] === '#' || skipS > 0)) {
      if (s[i] === '#') {
        skipS++; // Need to skip one character after #
      } else {
        skipS--; // We've skipped one character
      }
      i--; // Move to the previous character
    }

    // Find the next valid character in string t
    let skipT = 0;
    while (j >= 0 && (t[j] === '#' || skipT > 0)) {
      if (t[j] === '#') {
        skipT++; // Need to skip one character after #
      } else {
        skipT--; // We've skipped one character
      }
      j--; // Move to the previous character
    }

    // Compare current characters of both strings
    if (i >= 0 && j >= 0 && s[i] !== t[j]) {
      return false; // Characters do not match
    }

    // If one string ends and the other hasn't, return false
    if ((i >= 0) !== (j >= 0)) {
      return false;
    }

    // Move both pointers to compare the next characters
    i--;
    j--;
  }

  return true; // Strings are equal after processing
};


// console.log(backspaceCompare("a#c", "b"))
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"))
