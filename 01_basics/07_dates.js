//https://www.youtube.com/watch?v=tGLCuoumaGY&t=248s

let myDate = new Date() // this is how to declare date
console.log(myDate); // o/p 2025-02-12T07:51:02.862Z which is not readable

console.log(myDate.toString());
console.log(myDate.toDateString());// toDateString() is method which makes it much more readable
console.log(myDate.toLocaleString());

console.log(typeof myDate);// this is object

console.log('\n');

let myCreatedDate = new Date(2023, 0, 23) // mont 0 se start hote hai js me
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());

console.log('\n');

let myCreatedAnotherDate = new Date(2023, 4, 23 ,5,3) // 5 and 3 are time
console.log(myCreatedAnotherDate.toLocaleString());

console.log('\n');
let myTimeStamp = Date.now();
console.log(myTimeStamp); // this give mili second value
console.log(myCreatedDate.getTime()); // us date ka time nikalna hai  

console.log(Math.floor(Date.now()/1000));//ye scond me convert ke liye math.floor taki sirf ek hi number aye decimal ke baad ka number na aye

console.log('\n');
let newDate =new Date() // date declare
console.log(newDate);
console.log(newDate.getMonth());// aaj ka month 
console.log(newDate.getDate());// aaj ka date

newDate.toLocaleString('default',{
    weekday: "long",
})

