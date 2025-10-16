
// Immediately Invoked function Expressions(IIFE)

// Name IIFE
(function chai(){
    console.log("IIFE DOne");
    
})();//end this scope using ; else other function won't be worked will face error

// without Name
(function(){
    console.log("IIFE DOne");
    
})();//end this scope using ; else other function won't be worked will face error

// Arrow function IIFe
(()=>{
  console.log("Arrow Function done with IIFE");
  
})();

//unnamed Arrow function IIFe with Arguments & paramenter
((name)=>{
    console.log(`${name} very usefull example`);
    
})('same work like function')

