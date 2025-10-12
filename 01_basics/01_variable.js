const accountId=1324
let accountEmail="ankita@gmail.com"
var accountPassword="jhjhb"
accountLocation="jalna"

let accountState; //here we didn't pass any value then it will shown as undefined

/* 
prefer not to use var
because of issue in block scope & functional scope
*/
// accountId=2//not allowed
console.log(accountId);
accountEmail="assd@gmail.com"
console.log(accountEmail);

accountPassword="lol"
accountLocation="Chhatrapati Sambhaji Nagar" 

console.table([accountEmail, accountId, accountPassword, accountLocation,accountState]);

