// https://www.youtube.com/watch?v=vVYOHmqQDCU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=16
// 16/51

// 2 ways to declare object 1. constructor 2.litrals
//constructor make singelton and litrals dont

//------------------------------------------object litral ------------------------------------------

const jsUser = {
    name: 'navvvvvvvvvvvvvv',
    "full name": "navneet", // key - string , value -string

    123: 9999,  //imp - gpt --- This is valid JavaScript. The key 123 is implicitly converted to a string like "123".
                //console.log(Object.keys(jsUser)); 
                // Output: [ 'name', 'full name', '123', 'age', 'location', 'email', 'isLoggedIn', 'lastlogin' ]
                // Best Practice:
                // Stick to string identifiers or valid variable-style names when possible:
                // Good: "userId", "age", "isLoggedIn"
                // Avoid: numeric or weird keys unless necessary

    age: 69,//number
    location: 'bhosdapur',
    email: 'pappubhosdi@chutmarike.google.com',
    isLoggedIn: false, //boolean
    lastlogin: ['mon', 'tue']
}


//gpt-------------------------- how to add in ojects-------------------------------------------------
console.log('\x1b[35m how to add in ojects \x1b[0m')
console.log('\n')

//1. Dot Notation (when key is a valid identifier)
console.log("\x1b[31m this is to add value from dot notation adding key= phone \x1b[0m")

jsUser.phone = 1234567890;
console.log(jsUser)
console.log('\n')

//2. Bracket Notation (when key has spaces or special characters)
console.log("\x1b[31m this is to add value from Bracket notation adding key=user status \x1b[0m")

jsUser["user status"] = "active";
console.log(jsUser)
console.log('\n')
//------------------------------------------------------------------------------------------------------------------------------

//---------------------how to call object------------------------------------------
console.log('\x1b[35m          how to call object       \x1b[0m')

console.log(jsUser.age)
console.log(jsUser["age"])//better way(kyo ki agar maan lo key me space ya special character ho to . se call nahi ho ga [] se ho ga call)
//console.log(jsUser. full name) this is wrong so we will use above methord only
console.log(jsUser['full name'])// this is correct 

//console.log(jsUser.123) this will show error
console.log(jsUser[123])
console.log(jsUser["123"]); // we can Access this as string because evenntually object create every key to string(eg- bollean to string as well. except symble datatype)

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
console.log('\x1b[35m          change in object       \x1b[0m')
console.log('\n')

jsUser.age = 70 // change in object
console.log(jsUser.age)

console.log('\n');
//------------------------------------------------------------------------------------------------------------------------------
//----------------isko comment me is liye likha hai kyo ki iske freeze kar diya object  ko to niche ka code nahi chale ga

//Object.freeze(jsUser)// ab change nahi ho ga object me
//jsUser.age=85; // this change will not take place kyo ki phele freeze kar diya hai
//console.log(jsUser)// age 70 se 85 nahi hui
//------------------------------------------------------------------------------------------------------------------------------
//------------------------------------------ Add function in  object------------------------------------------
console.log('\x1b[35m          Add function in object       \x1b[0m')

jsUser.greeting = function () {
    console.log('hello every one gand marao')
}
jsUser.greetingTwo = function () {
    console.log(`hello my old  ${this.name}`)// function ko array ke specific key me dalne ke liye
}

console.log(jsUser)
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())



















