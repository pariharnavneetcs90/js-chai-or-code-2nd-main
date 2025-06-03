const name ="navneet";
const repoCount = 50;

console.log(name + repoCount + "abc"); // this is okay but dont use it

console.log(`my name is ${name} and my body cout is ${repoCount}`); // use this insted

const gameName = new String("Hitesh-hc-two-you") ; // new object bana deta hai

console.log(gameName[0]); // 0 is key
console.log(gameName[1]);// 1 is key
console.log(gameName[2]);// 2 is key

console.log("\n");
// these are method of string
console.log(gameName.length);
console.log(gameName.toUpperCase());// toUpperCase is method
console.log(gameName.charAt(2));// charAt means (character at) which is method
console.log(gameName.indexOf('h'));// indexOf  is method (h phel wala hi batye ga)

console.log("\n");
const newString = gameName.substring(0,4)// substring (0 se 4 index ke beech ka character bate ga 0th co include kare ga link 4th co inculude nahi kare ga) is method
console.log(newString);

console.log('this is sub string  '+gameName.substring(0,5))// easy way

console.log("\n");
const myName="navneet"
const anotherString = myName.slice(0,4)// slice is method
console.log(anotherString);

console.log('this is slice  '+gameName.slice(0,5)) // easy way

console.log("\n");
const newStringOne = "  ishika  "
console.log(newStringOne); // isme space a raha hai 
console.log(newStringOne.trim());//trime() is method // isme aage peeche ka space hata dete hai

console.log("\n");
const url ="https://navneet.com/ishika%20srivastav"
console.log(url.replace('%20','-'))//replace is method

console.log(url.includes('ishika'))
console.log(url.includes('ayush'))//includes is methord dhekta hai usrl me ye naam hai ki nahi // o/p false kyo ki ayush nahi hai string me

// string ko array me convert

console.log(gameName.split('-'));// split string ko convert karta hai array me on basisi of - ye space bhi ho sakta hai

const randome = "ye ek tst hai"
console.log(randome.split(" "));





