// foreach
const coading=["js","java","php","cpp","c","react","mongo"]
// coading.forEach(function(num){
//   console.log(num);
  
// })

// Second method
// coading.forEach((item)=>{
//     console.log(item);
    
// })

// third method
// function printme(item){
//     console.log(item);
    
// }
// coading.forEach(printme)

//four method
// coading.forEach((item, index,arr)=>{
    
//     console.log(item, index, arr);
    
// })

const myCoading=[
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"ja"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]
myCoading.forEach( (item)=>{
    console.log(item.languageFileName);
    console.log(`Now language name will be decleared ${item.languageName}`);
    
} )


const myCoading1=[
    {
        languageName:"Javascript",
        languageFileName:{
            version:"33.4",
            type:"sdsfd"
        }
    },
    {
        languageName:"Java",
        languageFileName:"ja"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoading1.forEach( (items)=>{
     console.log(items.languageFileName.version);
     
})