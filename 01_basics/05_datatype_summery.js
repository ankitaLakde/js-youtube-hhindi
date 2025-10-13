// #Primitive

// 7 Types:String, number, Boolean , Null, undefined, Symbol(unquie value), BigInt

const score= 100
const scoreValue=11.1
const isLoggedIn=false
const outSideTemp=null

let userEmail
// const id= Symbol('1222')
// const anotherId = symbol('123')

// console.log(id == anotherId);

const bigNumber = 33554564569999n

// Non Primitive(Reference Type)
// Array, objects, functions
const hero=["l1", "l2", "l3"];
const myObj={
    name:"jkbhjb",
    age:22,
}
const myFunction=function(){
    console.log("Heloo World");
    
}

console.log(typeof(myFunction))

// Heap(Primitive), Heap (Nonprimitve)

let myYotubename="ankita"
let anothername=myYotubename
anothername="Anks"
// in stack value is copy so both values are different
console.log(anothername);
console.log(myYotubename);

let userOne={
    email:"ads@gmail.com",
    upi:"sa@ybl"

}
// in Heap not stored copy directly apply change value to all(updated in original value)
let userTwo=userOne

userTwo.email="k@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);


