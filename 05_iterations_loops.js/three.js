// https://www.youtube.com/watch?v=M0YImBHQsWU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=29

//High Order Array loops

// [{},{},{}] array ke andar objects

// for of loop

const myArry = [1,2,3,4,5,"hi",10]
for (const index of myArry) {
    console.log(index)
}

const grettings = "hello world"
for(const gree of grettings){
    console.log(gree)
}

// map 
// chatgpt
// A Map is a built-in object that stores data in key-value pairs, where:

//     Keys can be any type: strings, numbers, objects, even functions!

//     It remembers the insertion order of keys.

//     It provides useful methods for working with the data.

console.log("\n")
// chatgpt
let myMap = new Map();

myMap.set('name', 'Alice');
myMap.set('age', 25);
myMap.set(true, 'isActive');
myMap.set({ x: 1 }, 'objectKey');

console.log(myMap.get('name'));   // Alice
console.log(myMap.get(true));     // isActive

// hitesh
console.log("\n")

const thisMap = new Map()
thisMap.set('in','india')
thisMap.set('usa','america')
thisMap.set('fa','france')
thisMap.set('in','india')// unique value rehti hai map me to ye enter nahi hua kyo ki phele enter ho chuka tha

console.log(thisMap)

// for of loop in map
console.log("\n")

for (const [ekKey, ekvalue] of thisMap) {
    console.log(ekKey , "-", ekvalue)
}

//for of loop in object nahi hota hai ( is not iterable)
console.log("\n")

const myObject ={
    "game1" : "nfs",
    'game2' : "spiderman"
}

for (const [ekKey, ekvalue] of myObject) {
    //console.log(ekKey , "-", ekvalue) //  is not iterable
}


