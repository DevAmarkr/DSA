// /* 
// Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

 

// Example 1:

// Input: num1 = "11", num2 = "123"
// Output: "134"
// Example 2:

// Input: num1 = "456", num2 = "77"
// Output: "533"
// Example 3:

// Input: num1 = "0", num2 = "0"
// Output: "0"
//  */


// var addStrings = function (num1, num2) {
//   let carry = 0;
//   let i = num1.length - 1, j = num2.length - 1;
//   let result = ""

//   while (i >= 0 || j >= 0) {
//     let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
//     let digit2 = j >= 0 ? parseInt(num2[j]) : 0;

//     let sum = digit1 + digit2 + carry;
//     carry = Math.floor(sum / 10);
//     result = (sum % 10) + result;
//     i--
//     j--
//   }

//   // if (carry > 0) {
//   //   result = carry + result;
//   // }
//   return result
// };

// console.log(addStrings("11", "123"))
// console.log(addStrings("1234", "5678"))


const locations = [{
  state: "Karnataka",
  city: "Bangalore",
  pincode: "560001"
},
{
  state: "Karnataka",
  city: "Bangalore",
  pincode: "560002"
},
{
  state: "Karnataka",
  city: "Bangalore",
  pincode: "560003"
},
{
  state: "Karnataka",
  city: "Mysore",
  pincode: "570001"
},
{
  state: "Karnataka",
  city: "Mysore",
  pincode: "570002"
},
{
  state: "Karnataka",
  city: "Mysore",
  pincode: "570003"
},
{
  state: "Maharashtra",
  city: "Mumbai",
  pincode: "460001"
},
{
  state: "Maharashtra",
  city: "Mumbai",
  pincode: "460002"
},
{
  state: "Maharashtra",
  city: "Mumbai",
  pincode: "460003"
},
{
  state: "Maharashtra",
  city: "Pune",
  pincode: "470001"
},
{
  state: "Maharashtra",
  city: "Pune",
  pincode: "470002"
},
{
  state: "Maharashtra",
  city: "Pune",
  pincode: "470003"
}
];






/* 
 {
 "Karnataka":[ {"Bangalore":{"pincode":["560001","560002","560003"]}},"Mysore":{"pcincode":["570001","570002","570003"]}]
  "Maharashtra":[{ "Mumbai":{ "pincode":["460001","560002","560003"]}},{"Pune":{"pcincode":["470001","470002","470003"]}}] 
 }
  
  */



function traverse(places) {
  let map = {};
  for (let i = 0; i < places.length; i++) {
    let state = places[i].state

    if (!map[state]) {
      map[state] = places.map((element) => {
        if (element.state === state) {
          let obj = {}
          if (!obj[element.city]) {
            obj[element.city] = element.city;
            obj[element.city] = {
              "pincode": "hello"
            }

          }
          return obj
        }
      })
    }
  }
  console.log(map)
}

console.log(traverse(locations))
























































































