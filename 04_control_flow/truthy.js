const userEmail="ankita@gmail.com"
if (userEmail){
    console.log("Got User EMail..");
    
}
else{
    console.log("Don't have user email");
    
}

// falsy value are:
// false, 0, -0, BigInt 0n, null, undefined, NaN


// truty value
// "0", 'flase'(0 & false are in strings)," "(space), [],{}, function(){}(empty function)

// if(userEmail.length==0){
//     console.log("Array is Empty");
    
// }
// else{
//     console.log("Array Not empty");
    
// }

const emptyObj={}
if(Object.keys(emptyObj).length===0){
  console.log("Object is empty");
  
}


// +interresting==============================+
// false==0 =>true
// false==' '=>true
// false==''=>true

// Nulish Coalescing Oprator (??): nul undefined
let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 13
val1= undefined?? 22 ?? 13// like fallback
console.log(val1);

// terniary oprator
// condition ? true : false
const iceTeaPrice=100
 iceTeaPrice>=80 ? console.log("Price is big"): console.log("less");
 ;
 
