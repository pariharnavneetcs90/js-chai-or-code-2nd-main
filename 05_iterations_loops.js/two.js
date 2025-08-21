//https://www.youtube.com/watch?v=w3Q55-l47P0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=28
// While and do while loop


console.log("\n")
// while 
console.log('\x1b[35m     while      \x1b[0m')

let i = 0 // intilasiation

while (i<=10) { // condtion
    console.log(`value of index is ${i}`)
    i = i + 2 // increment and decrement
}
console.log("\n")
//---------------------------------------------------------------
let iArray = ["batman","superman","flash"]

let k =0
while (k<iArray.length){
    console.log(iArray[k])
    k++
}
//---------------------------------------------------------------

console.log("\n")

let myArray = ["batman","superman","flash"]

let j =0
while (j<myArray.length){
    console.log(myArray)
    j++
}

//++++++++++++++++++++++++++++++++++++++++++++++++++ do while loop 
console.log('\x1b[35m   do  while      \x1b[0m')

console.log("\n")

let score  = 1 // initalise

do{
    console.log(score)
    score++ // icrement
} while (score<=10); // condition

//-------------------------------------------------------------------
console.log("\n")

let scores  = 15 // condition true nahi hai lekin ek baat to chalta hi hai loop phle execute kare thai phir codition chek karte hai

do{
    console.log(scores)
    scores++ 
} while (scores<=10);