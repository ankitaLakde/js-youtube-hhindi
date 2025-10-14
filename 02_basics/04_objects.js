// singletone declearation
// const tinderUser=new Object()

// literal
const tinderUser = {}

tinderUser.id="12dd"
tinderUser.name="kddsdf"
tinderUser.email="a@gmail.com"
tinderUser.isLoggedin=false
// console.log(tinderUser);


// const normalUser={
//     name:"ankits",
//     fullName:{
//         userFullName:{
//                 firstName:"sass",
//                 lastName:"aaaqq"
//             }

//         }
//     }
// console.log(normalUser.fullName.userFullName.firstName);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"sd",6:"zxc"}

// const obj4=Object.assign({}, obj1, obj2, obj3)//to combine array
// const obj4={...obj1,...obj2,...obj3}//using spread method
// console.log(obj4);
const users=[
    {
        id:1,
        name:"ssd"
    },
    {
        id:2,
        name:"wwssd"
    },
    {
        id:3,
        name:"sxcssd"
    }
]
users[1].name
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('islogged'));
// console.log(tinderUser.hasOwnProperty('isLoggedin'));//Output in blooean

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
const {courseInstructor:tor} = course
const {price} = course
console.log(tor);

// console.log(courseInstructor);
console.log(price);



