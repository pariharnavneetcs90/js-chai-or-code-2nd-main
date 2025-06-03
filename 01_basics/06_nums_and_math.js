//https://www.youtube.com/watch?v=_KqpeDc47Ro&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=12
const score = 400
console.log(score);

const balance = new Number(100) // this is correct way to declare number
console.log(balance);

//both are okay to decalre a number but below is right

console.log(balance.toString());//.toString() is method
console.log(balance.toString().length);
console.log(balance.toFixed(4)); // .toFixed() is method

const otherNumber = 123.89568
console.log(otherNumber.toPrecision(3));//.toPrecision()
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(5));

const hundred = 100000000
console.log(hundred.toLocaleString('en-In'));// toLocaleString() comma laga deta hai en-in indard standar ke hisab se

// +++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

console.log(Math.abs(-4));// .abs negative ka positive karta hai
console.log(Math.round(9.6));// .round of kar deta hai
console.log(Math.ceil(15.2));// .round of kar deta hai jada pe matlab agrar decimal me hai to jada me round of kar de ga
console.log(Math.floor(18.9));// kam me round of
console.log(Math.min(4, 5, 6, 8, 9))// . min number
console.log(Math.max(4, 5, 6, 8, 9))// . max number

console.log('\n')
console.log(Math.random());// 0 or 1 ke beech ka number
console.log((Math.random() * 10) + 1); // +1 add kiya kaki decimal se phele number aye
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

// agar 2 number ke beech lana hai to kya kare
console.log('\n')
const min = 10
const max = 20
// ab 10 or 20 ke beech hi aye ga 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
// explanation --- Math.floor- ek hi number aye round of ho ke kam me round of ho ke
// ---- math .random - random number genrate karne ke liye
//-------- max -min -- taki isi ke beech rahe
//--------+ 1 taki decimal sre phele aye number eg - 0.5 to 5


 




