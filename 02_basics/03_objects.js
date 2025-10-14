// singletone
// Object.create


// object literals keys: Value
const mysym=Symbol("key1")
const jsUser={
    name:"ankita",
    age:22,
    "full name":"Ankita Lakde",
    [mysym]:"mykey1",
    location:"mumbai",
    email:"anks@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sat"]


}
// console.log(jsUser.name);
// console.log(jsUser["name"]);there are 2 way to display object
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mysym]);
jsUser.email="anks@mail.com"
// Object.freeze(jsUser)//after Freeze there value not be changed
// jsUser.email="d@gmail.com"
// console.log(jsUser["email"]);
// console.log(jsUser);


// function
jsUser.greeting=function(){
    console.log('this is function check hoow ');
    
}
jsUser.greetingTwo=function(){
    console.log(`Heloo user ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
