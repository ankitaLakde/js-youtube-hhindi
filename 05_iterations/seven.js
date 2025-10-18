// map
const numVal=[1,2,3,4,5,6,7,8,9,10]


// // const newNumval=numVal.map( (item) => item+10 )
// const newNumval=numVal.map( (item) => 
//     {return item+15} //if used {} then used return to disply output
// )
// console.log(newNumval);


// Chaining method

const valNum=numVal.map((itme) => itme*10 )
                   .map((itme) => itme+1 )
                   .filter((item)=> item>=30)

                   console.log(valNum);
                   
