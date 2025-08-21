//https://www.youtube.com/watch?v=0P_YvC6Gg0c&t=1785s
//30:56

const userEmil = "hitesh.ai" // not empty string is considerd true

if (userEmil){
    console.log("got it")
} else {
    console.log("dot get it")
}

const useEmil = "" // empty string is considerd as false

if (useEmil){
    console.log("got it")
} else {
    console.log("dot get it")
}

const useEil = [] // empty array is considerd as true

if (useEil){
    console.log("got it")
} else {
    console.log("dot get it")
}

// falsy values -

// false , 0, -0, BifInt, 0n , "" ,null ,underfinded ,NaN

// truthy values -

//"0","false"," ", [],{},function(){}


console.log('\n');

// chking if array is emprty or not

const newAryy = []

if (newAryy.length === 0){
    console.log("array is empty")
}
// 39.09  chking if object is emprty or not (samaj nahi aya)
const  emptyObjectHai = {}

if (Object.keys(emptyObjectHai).length === 0 ){

}