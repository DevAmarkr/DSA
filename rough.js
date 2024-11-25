let  list = ["A","B","C","D"]

let p = list.pop()
console.log(p)
list.push("D")
console.log(list)
list.shift()
console.log(list)
list.unshift("A")
console.log(list)

// Array.push method always put items at the last of the list
// Array.pop will remove items from end of the list
// Array.shift method will remove item from the beggening of the list
// Array.unshift methid will add item to the beggining of the list

let d = []
d[list.pop()] = true
console.log(d)