//for of
["","",""]
[{},{},{}]


// const arr=[1, 2, 3, 4, 5, 6, 7]
// for (const element of arr) {
//     console.log(element);
    
// }

// const arr2="Good Morning world!"

// for (const element of arr2) {
//    console.log(element);
      
// }


// MAP it's know for uniques property
const map=new Map()
map.set('IN', "India")
map.set('USA',"United State Of America")
map.set('FR',"France")
map.set('IN',"India")
map.set('USA',"United State Of America")
//here multiple time value declared but it will print only one time

console.log(map);

for (const [key, value] of map) {
   console.log(key,':-', value);
      
}


//+++++++++++++++++++++++ for object [{},{}] for of not working++++++++++++++++++
