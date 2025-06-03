//https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23

// arrow function

const user = { // this is object
    username : "hitesh",
    price : 999,
    // object ke andar function
    welocomeMessage : function(){
        console.log(`${this.username}, welcome `); // this use tab karte hai jab scope ke andar ke varibles ko access karna ho jase yaha pe username ko access kar reha hai
        console.log(this);
    }

}
user.welocomeMessage()// function execute karne ke liye () lagan padta hai
user.username = "sam"
user.welocomeMessage()

console.log(this)// o/p {} kyo ki hum node enviroment , node me this empty object ko refer karta hai

console.log('\n')

function chai (){
    const username = "hello"
    console.log(this.username)
}
// caling of function
chai()// o/p undefind kyo ki  //this object me kaam karta hai function me nahi

//+++++++++++++++++++++++++++++++++++++++ arrow
//multiline

const greet = () => {
    console.log("Hello!");
  };
  
  greet(); // Output: Hello!

//single line  

const greet2 = () => console.log("Hello222!");

greet2(); // Output: Hello!

//with parameters

const addTwo =(num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,4))

//basic
const Two =(num1,num2) => num1+num2

console.log(Two(4,4))
  
// agrar {} lagaya to return lagna pade ga or agar () use kiya to return nahii likhna pade ga

const three =(num1,num2) => (num1+num2) // agra return nahi lagana to () lagana pade ga
console.log(three(9,4))

const four =(num1,num2) => ({username:"navneet"}) // yaha pe obect liya hai usko return karna padta hai lekin humne {} upar () laga diya to retun nahi lagana pada
console.log(four(8,4))
