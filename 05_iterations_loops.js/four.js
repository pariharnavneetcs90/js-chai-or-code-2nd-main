// https://www.youtube.com/watch?v=M0YImBHQsWU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30
// 29

// object me loops 

//for in loop

const myObject ={
    js : "javascript",
    cpp: 'c++',
    rb:"ruby"
}

for (const key in myObject) {
    console.log(key);
}
console.log("\n")

for (const key in myObject) {
    console.log(`${key} - ${myObject[key]}`);
}

// loop in array
console.log("\n")

const myArray = ["js","java","cpp","swift"]

for (const key in myArray) {
   console.log(myArray[key])
}

// map me for in loop nahi kaam karta 

const thisMap = new Map()
thisMap.set('in','india')
thisMap.set('usa','america')
thisMap.set('fa','france')
thisMap.set('in','india')

for (const key in thisMap) {
   console.log(key);// nahi aaye ga map is not iteratble
}