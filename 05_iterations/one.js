// for
// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(i==5){
//         console.log("5 is best number");
        
//     }
//     console.log(element);
    
    
// }
// console.log(element);
// for (let i=1; i<=10; i++) {
//    for (let j = 1; j <=10; j++) {
//        console.log(`${i} * ${j} = ${i*j}`);
       
       
//    }
// }

// for (let i=4; i>=1; i--) {
//      let row = ""; 
    
//    for (let j = 1; j <=i; j++) {
//         row += "*";
//    }
//    console.log(row);
   
// }


// for(i=4;i>0; i--){
//     console.log('*'.repeat(i));
    
// }
//even number
// for (let i = 2; i <=10; i+=2) {
//     console.log(`Even Number is:${i}`);
    
// }

//reverse number
// for (let i = 5; i >=0; i--) {
//   console.log(`${i}`);
  
// }
// Print a square pattern of stars (4×4)
// for (let i = 1; i <= 4; i++) {
//    let row="";
//   for (let j = 1; j <= 4; j++) {
//      row+="*"
//   }
//   console.log(row);
  
// }

// Print a right triangle pattern
// for (let i = 1; i <=5; i++) {
//     let row=""; 
//     for (let j = 1; j <=i; j++) {
//        row+="*";    
//     } 
//   console.log(row);
  
// }

// // Number Trainge
// for (let i = 1; i <=5; i++) {
//     let row = "";
//     for (let j = 1; j <=i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
// }
// Reverse Number
// for (let i = 5; i >=1; i--) {
//     let row="";
//         for (let j =1; j <=i; j++) {
//             row+= j + " ";
//         }
//     console.log(row);
            
// }

// Right-Aligned Star Pattern (Pyramid style)
// for (let i = 1; i <=5; i++) {
//     let row="";
//    for (let j = 1; j <=5-i; j++) {
//     row +=" ";
//    }
//    for (let k = 1; k <=i; k++) {
   
//     row +="*"
//    }
//    console.log(row);
   
    
// }

// Full Pyramid Pattern
// for (let i = 0; i <=5; i++) {
//     let row="";
//     for (let j = 0; j <=5-i; j++) {
//       row+=" "
//     }
//     for (let k = 0; k <=2*i; k++) {
//       row+="*"
//     }    
//     console.log(row);
    
// }

// Number Pyramid

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }


// const myArray=['l1','l2','l3','l4'];
// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(myArray[i]);
    
// }


// break & continue

// for (let i = 0; i <=20; i++) {
//     if(i==5){
//           console.log("Best value "+i);
//           break;
          
//     }
//    console.log(`value of ${i}`);
   
    
// }

for (let i = 0; i <=20; i++) {
    if(i==5){
          console.log("Best value "+i);
          continue;
          
    }
   console.log(`value of ${i}`);
   
    
}