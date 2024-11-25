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
  return places.reduce((group, place) => {
    let { state, city, pincode } = place;
    group[state] = group[state] ?? {};
    group[state][city] = group[state][city] ?? {}
    group[state][city]["pincode"] = group[state][city]["pincode"] ?? []
    group[state][city]["pincode"].push(pincode)
    return group
  }, {})
}

console.log(traverse(locations))