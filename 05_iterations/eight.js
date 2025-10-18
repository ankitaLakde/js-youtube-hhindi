// used for shopping cart
// const myNum=[1,2,3]
// const  myTotal=myNum.reduce(function(acc, currVal){
//      console.log(`acc:${acc} & current Value is:${currVal}`);
//      return (acc+currVal)
// },0)
// console.log(myTotal);


// //Arrow Function
// const myNum=[1,2,3]
// const myTotal=myNum.reduce( (acc, currVal)=> acc+currVal, 0 ) 
// console.log(myTotal);

const shoppingCart=[
    {
       itemName:"Js course",
       price:500
    },
    {
       itemName:"PY course",
       price:200
    },
    {
       itemName:"Datascience course",
       price:400
    },
    {
       itemName:"react course",
       price:400
    },
]

const shopTotal=shoppingCart.reduce((acc,items)=>(acc+items.price),0)
console.log(shopTotal);
