//https://www.youtube.com/watch?v=9MfwYoWKKVE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30
//30

// reduce

const myNums = [1,5,10]

const myTotal = myNums.reduce(function (ekaccumlator , ekcurrentvalue){
    console.log(`acc : ${ekaccumlator} and current value ${ekcurrentvalue}`)
    return ekaccumlator + ekcurrentvalue // ye hum log + kar reha hai har baar accumator or current value change ho gi
},7) // ye 7 matlab intilase kaha se suru ho ga 

console.log(myTotal)

//output
// acc : 7 and current value 1 // phele 7 kyo ki 7 se suru hua hai
// acc : 8 and current value 5 // ab accmlator 8 ho gaya kyo ki purane ka output leta hai 
// acc : 13 and current value 10
// 23
console.log("\n")

// same code arro function me likhne ki kosish much easy
const myTotal2 = myNums.reduce((ekAcc,ekCurr)=> ekAcc+ekCurr ,7)
console.log(myTotal2)

console.log("\n")

const cart =[
    {
        course : "python",
        price : 1
    },
    {
        course : "js",
        price : 2
    },
    {
        course : "java",
        price : 3
    },
]

const totalprice = cart.reduce((ekacc , ekitem)=>ekacc+ ekitem.price ,0) //0 kyo ki cart me 0 se paisa suru ho ga
console.log(totalprice) 