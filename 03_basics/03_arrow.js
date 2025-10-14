const user= {
    userName:"Ankita",
    price:333,
    welcomemsg:function(){
    //    console.log(`${this.userName}, Welcome to website`);
    //    console.log(this);
       
   
    }
}

user.welcomemsg()
user.username="KP"
user.welcomemsg()

// console.log(this);

// seperate function
// function chai(){
//     const usrname="ddd"
//     // console.log(this);
    
//     console.log(this.usrname)//o/p is Undefined
// }
// chai()

// function stored in variable
// const chai=function(){
//     const usrname="ssss"
//     console.log(this.usrname);//o/p showing undefined
// }
// chai()

// Arrow function
// const chai=()=>{
//     const usrname="fsd"
//     console.log(this.usrname);//o/p showing undefined
// }
// chai()

// basic arrow function
// const addTwo=(num1, num2)=>{
   
//       return num1 + num2
// }
// console.log(addTwo(23,56));


// implicit Arrow function
// const addTwo=(n1, n2)=>n1+n2
//   console.log(addTwo(3,6))

// +++++interresting if you used ()then no need to used "return" if u used {} then u have to used "return"
// const addTwo=(n1, n2)=>(n1+n2)
//  console.log(addTwo(23,56))

 const addTwo=(n1, n2)=>({firstName:"ddccff"})//called object here so need to required ()...to print{object value} 
 console.log(addTwo(23,56))