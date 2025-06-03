//https://www.youtube.com/watch?v=yY0bKZNYmJs&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=4

/*
Prefer not to use var
because of issue in block scope and functional scope

{
    var x=100;
}
console.log(x); o/p is 100 var scope se bhar bhi access ho sakta hai it is global varibale 

{
    let a=300;
}
console.log(a); o/p is error kyo ki let apne block ke bhar access nahi hota

*/
let score = 33;

console.log("test",score);



const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed // kyo ki accoutId const hai or usko change nahi kar sakte

// niche varibles ko change kar reha hai 
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId,accountEmail);



// pura time console.log na likhna pade to .table ka use karte hai
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 