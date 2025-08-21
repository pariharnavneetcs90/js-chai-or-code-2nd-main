//https://www.youtube.com/watch?v=9MfwYoWKKVE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30
// 30

// map 

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNum = myNums.map((nume)=> nume + 10 ) // arrray ke har number me 10 add
console.log(newNum)

//const newNum2 = myNums.map((nume)=> {return nume + 10} ) // agar {} hai to return lagana padta hai 
//console.log(newNum2)

// channing (multiple map filter)
console.log("\n")
// jab map ke baad map lagte hai to orhinal value se dubara nahi lteta vo phle map ne jo value di usse leta hai
const newNumber = myNums.map((num1)=> num1 * 10)
                        .map((num2)=>num2 +1)
                        .filter((num3) => num3 >=30)
console.log(newNumber)

