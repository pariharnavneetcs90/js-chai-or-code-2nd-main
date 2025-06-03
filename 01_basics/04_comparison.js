//https://www.youtube.com/watch?v=giP2uXMlv4c&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=8

/*
console.log(2>1); // o/p is true
console.log(2>=1); // o/p is true
console.log(2<1); // o/p is false
console.log(2==1); // o/p is false
console.log(2!=1); // o/p is true
*/

console.log("\n");

console.log("2" == 2); // true it only checks value
console.log("2" === 2); // it checks value and datatype both
console.log("\n");
//-------------------------only compare smilar datatypes

console.log("2" > 1); // o/p is true because js convert string to number but this is wrong
console.log("02" > 1); // o/p is true

console.log("\n");
//-----------------------------------avoid below conversion because they are diffrent datatypes

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); // true

console.log("\n");

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); // false

console.log("\n");

