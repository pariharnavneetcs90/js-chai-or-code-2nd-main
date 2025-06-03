//https://www.youtube.com/watch?v=M0YImBHQsWU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30
//29

// lops in array

const coding = ["js","java","cpp","python"]

// for each lopp

coding.forEach( function (ekval) {
    console.log(ekval);
})

console.log("\n")

coding.forEach( (ekorval)=>{ // arrow function
    console.log(ekorval) 
})

console.log("\n")
coding.forEach( function (ekval,ekindex ,puraarray) {
    console.log(ekval ,ekindex,puraarray);
})

// array ke andar objects  // bhot imp
// [{},{},{}]
const ObjInArr =[
    {
        language : "javascript",
        filename : "js"
    },
    {
        language : "java",
        filename : "java"
    },
    {
        language : "python",
        filename : "py"
    }
]
console.log("\n")
ObjInArr.forEach((myitem)=>{
    console.log(myitem.language) // bhot imp
})
console.log("\n")
ObjInArr.forEach((myitem)=>{
    console.log(myitem.filename) // bhot imp
})

console.log("\n")
ObjInArr.forEach((myitem)=>{
    console.log(`${myitem.language},----,${myitem.filename}`) // bhot imp
})