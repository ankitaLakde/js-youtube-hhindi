let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof(myDate))
// In Javascript month start from 0
// let mycreatedDate=new Date(2025, 0 , 24)
// console.log(mycreatedDate.toDateString());
// let mycreatedDate=new Date(2025, 0 , 24, 6 ,2)
// console.log(mycreatedDate.toLocaleString());
let mycreatedDate=new Date("01-14-2023")
console.log(mycreatedDate.toLocaleString());

let myTime = Date.now()
console.log(myTime);//time in milisec
//now time in second
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());//month start with 0
console.log(newDate.getMonth()+1);//month start with 0

console.log(newDate.getFullYear());


let neww = newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata" // you can set your timezone or leave it out
});
console.log(neww);


