const math=3000
console.log(math)
const balance=new Number(200)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber=223.345646
console.log(otherNumber.toPrecision(5));


const hundred=1200000000
console.log(hundred.toLocaleString('en-IN'));


// +++++++++++++++Maths++++++++++++
console.log(Math);
console.log(Math.abs(-4));//convert (-) negative value into positive 
console.log(Math.round(5.7655));
console.log(Math.ceil(4.3));//always consider big value o/p 5
console.log(Math.floor(4.9));//always consider small value o/p 4
console.log(Math.sqrt(25));
console.log(Math.max(2,4,567,222,1));
console.log(Math.min(334.5,3445,222,17));
console.log(Math.random());// value always in between 0 or 1
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random())*10) +1);

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);









