//Array
const myArr=[2,456,67,8,1]
const myHero=["Harshal","KP"]
const myArr2=new Array(3,5,6,8,9)
// console.log(myArr[1]);
// myArr.push(99)
// myArr.push(5)//add new value in array
// myArr.pop()//it will removed last value

// myArr.unshift(45)// value will be add in first position in array same work like Push but first position
// myArr.unshift(32)
// myArr.shift()//it will work like pop but first value will be removed


// console.log(myArr.includes(9));// Result will be displyed in True & false
// console.log(myArr.indexOf(9));//if value exist then will show indes number else will display -1
// console.log(myArr.indexOf(456));
//convert into string
const newArray=myArr.join()

// console.log(myArr);
// console.log(newArray);


//slice splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3)//OriginalArray ko /Manipulate nahi karya
console.log("B ", myn1);
console.log(myArr);
const myn2=myArr.splice(1,3)//original array ko manupulate karta hai
console.log(myArr);

console.log("C ", myn2);
console.log(myArr);




