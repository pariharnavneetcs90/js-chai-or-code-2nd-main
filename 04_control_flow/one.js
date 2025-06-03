// https://www.youtube.com/watch?v=0P_YvC6Gg0c&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=26

// if 

const isUserloggedIn = true 
if (2=="2"){ // that menan this is true
    console.log("execute if it is true")
}

if (5==="5"){ // that menan this is false
    console.log("is it true?")
}

if (2 != 3 ){ // 2 is not equal to 3
    console.log("okay")
}

// single eual to assingn(=),double eual to check if values are same(==) e.g 2=="2" (this is true),
//triple eual to check if values and datatype are same(===) e.g 2==="2" (this is false as one is nuber and other is string) 

// conditionals ------------ <,>,<=,>=,==,===, !==


console.log("\n")

const temprature = 45

if ( temprature <= 40){
    console.log("cold weather")
}
else{
    console.log(" hot weather")
}

console.log("\n")

const blance =1000

if(blance <500) {
    console.log("less than 500")
} else if (blance <750) {
    console.log("lessthan 750")
}
else if (blance <900) {
    console.log("lessthan 900")
} else {
    console.log("less than 1200")
}
// multiple conditions
console.log("\n")

const isUserlogged =true
const debitCard =true

if (isUserlogged && debitCard){ //AND && matalab dono conditions true honi chaiye
    console.log("hiyaa")
}
console.log("\n")
const userloggedfromgmail = false
const userloggedinfromfacbook = true

if (userloggedfromgmail || userloggedinfromfacbook ){ // OR || isme ek bhi condiotion true hai to execute karo
    console.log("hellow")
}

console.log("\n")
//42:16 nullish coalescing Operator (??) --- (deals with null and undefinined)
// ye kam ase kaerta hai ki agar maan lo database se null a jaye to structure ko kharab na kare 
let val1;
val1 = 5??10
console.log(val1); // o/p 5

let val2 ;
val2 = null?? 54 // null a gaya to 54 le le ga nahi to null ki jaga jo value ho gi vo
console.log(val2)

let val3 ;
val3 = undefined?? 65 // undefined a gaya to 65 le le ga nahi to null ki jaga jo value ho gi vo
console.log(val3)

let val4 ;
val4 = null?? 10 ?? 20 // first value assign kare ga
console.log(val4)

console.log("\n")
// ternary operator

//condition ? true : false 

const iceTeaPrice = 100

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more thane 80")