function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
    console.log("A");
    
}
// sayMyName()

// function addnumber(num1,num2){
//     console.log(num1+num2);

    
// }
function addnumber(num1, num2){
    return num1+num2;
}

let result=addnumber(4,5)
// console.log(result);

function userLogin(usernames){
    if(!usernames){
        console.log("Please Enter Username");
        return
    }
     return `${usernames} Just logged In`
}
// console.log(userLogin("Ankitss"));
// console.log(userLogin());


// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,340));


const user={
    username:"kite",
    price:298
}
function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"kite logo",
    price:29228
})

// Array
const myNewArray=[200,300,440]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,332,440]));
