//https://www.youtube.com/watch?v=u6mVHkMpoMk&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=45
//45
// classes construtor and static

// es6 ke badd ye sab aya

//---------------------------------------------------------------gpt 

// -------------------------------------------MOST BASIC CODE OF CLASS IN JS

    // Define a class
    class Person {
        constructor(name, age) {   // constructor = runs when object is created
        this.name = name;
        this.age = age;
  }

    // Method  ----  greet() → method (function inside class).
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    // Create an object (instance) of the class
        
        const person1 = new Person("Navneet", 25);

    // Call method
        person1.greet();

    // O/P Hello, my name is Navneet and I am 25 years old.

     
    /* 🧠 Explanation

    class Person { ... } → creates a blueprint.

    constructor(name, age) → runs automatically when you make a new object.

    this.name / this.age → properties attached to the object.

    greet() → method (function inside class).

    new Person("Navneet", 25) → creates an object from the class.   

    */
    console.log('\n')
//-------------------------------------------------- What is diffrence between class and function

//1. Function (Constructor Function)

//Before ES6, we created objects using functions:

function Person4(name, age) {
  this.name = name;
  this.age = age;
}

Person4.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
};

const p1 = new Person4("ishika", 16);
p1.greet();

console.log('\n')

// 2. Class (Syntactic Sugar)

//With ES6, we got class, which is just a cleaner way to write the same thing:

class Person5 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

const p2 = new Person5("jarsi", 18);
p2.greet();

console.log('\n')

//---------------------------------------------------- HITESH
class a {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    ePassword(){
        return `${this.password} abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new a("chai","abc@com",'123')

console.log(chai)
console.log(chai.ePassword())
console.log(chai.changeUsername())

console.log('\n')
// behind the sean how calls works 

function b(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
}

b.prototype.ePassword = function(){
        return `${this.password} abc`
    
}

const tea = new a("tea","tea@com",'123')

console.log(tea)
console.log(tea.ePassword())
