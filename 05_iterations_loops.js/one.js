// https://www.youtube.com/watch?v=Y1cpFsXrEgY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=27
//for loops
for (let i = 0; i <=5; i++) {
    console.log(i);    
}
console.log("\n")
for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element);    
}

//console.log(element);  // o/p error kyo ki ye sccope ke bhar accese nahi ho sakta
console.log("\n")
for (let i = 10; i <= 20; i++) {

    const element = i;

    if (element == 15){
        console.log("15 is best no")
    }

    console.log(element);    
}
console.log('\x1b[35m     nested loops       \x1b[0m')

// nested loops
// chat gpt
console.log("\n")
for (let i = 1; i <= 2; i++) {
    console.log(`Outer loop i = ${i}`);

    for (let j = 1; j <= 3; j++) {
        console.log(`   Inner loop j = ${j}`);
    }
}
console.log("\n")
// ye hitesh ka code hai samj nahi aya
// for (let i = 0; i <= 10; i++) {
//     console.log(`outer loop ${i}`)

//     for (let j = 0; j <=10; j++) {
//         console.log(`inner loop value ${j} and outer loop ${i}`)
//     }
    
// }

console.log('\n')
// chat gpt
for (let i = 1; i <= 3; i++) {16
    console.log(`Table of ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }

    console.log(''); // Just to add a blank line between tables
}
console.log('\n')
console.log('\x1b[35m     test      \x1b[0m')

const arr1 = [1,2,3,4,5]

console.log(arr1)
console.log(arr1.length)
console.log(arr1.indexOf(5))// index 0 se suru hota hai

console.log('\n')
console.log('\x1b[35m     array ke loops      \x1b[0m')

// array ke loops
let myArray = ["flash" , "batman" , "superman"]

console.log(myArray.length);//o/p 3 kyo ki 3 item hai loop me

for (let index = 0; index < myArray.length; index++) { // index < myArray.length is liye kyo ki .lenght se ek kam hota hai index
    const element = myArray[index];
    console.log(element)
}

// loops ko stop beech me (break and continue)
console.log('\n')
//break
for (let i = 1; i < 10; i++) {
    if(i == 5){
        console.log("5 is dectected")
        break
    }
    console.log(`value is ${i}`)
    
}
console.log('\n')
//continue matalb detect ho gaya lekin loop pura karo
for (let i = 1; i < 10; i++) {
    if(i == 5){
        console.log("5 is dectected")
        continue
    }
    console.log(`value is ${i}`)
    
}




