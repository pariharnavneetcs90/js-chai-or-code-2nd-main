//https://www.youtube.com/watch?v=X7hDBhd_L5U&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=6
let score = 33;
console.log(typeof score);//number
console.log('\n');

let a = "33";
console.log(typeof a);//string
console.log('\n');

let b = "33";
let value = Number(b)//this convert string in number
console.log(typeof value)//number
console.log("this is", value)

console.log("\n"); // for next line

let c = "33abc";
let varibale1 = Number(c)//this convert c nuber+string to number
console.log(typeof varibale1)//number showing but it is wrong 
console.log(varibale1) // Nan showing

console.log("\n");

let d = null;
let varibale2 = Number(d)//this convert d null to number
console.log(typeof varibale2)//number showing but it is wrong
console.log(varibale2) // 0 showing

console.log("\n");

let e = true;
let varibale3 = Number(e)//this convert e boolean to number
console.log(typeof varibale3)//number showing but it is wrong
console.log(varibale3) // 1 showing

// conclusion
//"33" => 33
//"33abc"=>NaN
//true => 1; false =>0

console.log('\n');
let f = ""
let varibale4 = Boolean(f)// this convert f variable to boolean
console.log(varibale4)// false showing because it is empty string

//1=> true ; 0=>false
//""=> false