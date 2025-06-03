//https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16

// 2 ways to declare object 1. constructor 2.litrals
//constructor make singelton and litrals dont

//object litral 

const jsUser = {
    name: 'nav',//string
    "full name": "navneet",
    age: 69,//number
    location: 'bhosdapur',
    email: 'pappubhosdi@chutmarike.google.com',
    isLoggedIn: false, //boolean
    lastlogin: ['mon', 'tue']
}

console.log(jsUser.age)
console.log(jsUser["age"])//better way
//console.log(jsUser. full name) this is wrong so we will use above methord only
console.log(jsUser['full name'])// this is correct 

console.log('\n')
jsUser.age = 70 // change in object
console.log(jsUser.age)
//Object.freeze(jsUser)// ab change nahi ho ga object me
//jsUser.age=85; // this change will not take place kyo ki phele freeze kar diya hai
//console.log(jsUser)// age 70 se 85 nahi hui

//++++++++++++++++++++++ Add function in same object

jsUser.greeting = function () {
    console.log('hello every one gand marao')
}
jsUser.greetingTwo = function () {
    console.log(`hello my old  ${this.name}`)// function ko array ke specific key me dalne ke liye
}
console.log(jsUser)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())



















