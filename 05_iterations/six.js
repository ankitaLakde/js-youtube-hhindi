// const coading=["js","java","php","cpp","c","react","mongo"]

// // foreachnnot return any value suppose we need to check any specific vale like "cpp" so we can't able to check
// const value=coading.forEach((item)=>{
//     console.log(item);
//     return item
// })
// console.log(value);// o/p is "undefined"

// const numVal=[1,2,3,4,5,6,7,8,9,10]
//to check specific value use filter


// Implicit call
// const namValue= numVal.filter((num)=>(num>5))
// console.log(`Value iss :${namValue}`);

// explicit call
// const val=numVal.filter((num)=>{
//    return num>=5   //here we need to use "return" if we use this '{}' then new scope start and o/p will be [] empty so

// })
//return value here
// console.log(val);

const myVal=[1,2,3,4,5,6,7,8,9,10]
const newNum=[]
myVal.forEach((item)=>{
    if(item>4){
          newNum.push(item)
    }
})
console.log(newNum);


const cartPrice=[
  { "_id": 2, "quantity": 5, "price": 25, "targetPrice": 100 },
  { "_id": 1, "quantity": 10, "price": 15, "targetPrice": 120 },
  { "_id": 3, "quantity": 6, "price": 35, "targetPrice": 100 },
  { "_id": 4, "quantity": 5, "price": 55, "targetPrice": 150 },
  { "_id": 5, "quantity": 5, "price": 55, "targetPrice": 150 }
]
// without return
let newVals=cartPrice.filter((cp)=> cp.quantity >= 6)
//  newVals=cartPrice.filter((cp)=> cp.targetPrice >= 115 && cp.price>45 )
 newVals=cartPrice.filter((cp)=> cp.targetPrice >= 115 && cp.quantity >= 6 )
//with return
// const newVals=cartPrice.filter((cp)=>{
//     if(cp.quantity>=6){

//     return cp
//     }
// })
console.log(newVals);
