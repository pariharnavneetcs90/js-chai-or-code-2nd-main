//https://www.youtube.com/watch?v=-owpuf4lbyU&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=44
//44
// call and this in js

function setUsername(username){
    this.username = username
}

function CreateUsers(username, email ,password){
    this.email =email
    this.password=password
    this.username = username
}

const chai =new CreateUsers('chai',"chai@google", "123")
console.log(chai)

//------------------------------------- call
console.log('\n')

function setUsername(username){
    this.username = username
}

function CreateUsers(username, email ,password){
    this.email =email
    this.password=password

    setUsername.call(this,username) // super key woard use kar lo better hai 06_inheritance.js me upar ka code
}

const cha =new CreateUsers('chai',"chai@google", "123")
console.log(cha)

// this gpt

/*
const user = {
  name: "Navneet",
  sayHello: function() {
    console.log("Hi, I am " + this.name);
  }
};

user.sayHello(); // Hi, I am Navneet


*/

// this with new

/*
Step 6: this with new

👉 Once you understand the above, now new makes sense: it sets this to a new object.

function Person(name) {
  this.name = name;
}

const p1 = new Person("Navneet");
console.log(p1.name); // Navneet


*/