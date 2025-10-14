let a=10
const b=20
var c=102
if(true){
    let a=2
    const b=222
    var c=33
    console.log("Inner A: ",a);//block scope
    console.log("Inner B: ", b);
    console.log("Inner C:",c);   
}
console.log(a);//global scope
console.log(b);
console.log(c);//var imapct out of scope so not valid


function one(){
    const username="ankisss"
    function two(){
        const website="sscff"
        console.log(username+" "+" "+website);    
    }
    // console.log(website);
    two()
}
one()


if(true){
    const username="ankita"
    if(username==="ankita"){
        const website="sssd"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++++++++++INTERESTING+++++++++++
addone(45) //it's work because function call any where
function addone(num){
    return num + 1
}


addTwo(23)//It won't be worked because value hold in varible & access before declaration
const addTwo=function(num){
    return num + 2
}




