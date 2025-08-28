//https://www.youtube.com/watch?v=pN-Qmv4zBcI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=42
//42

//object literal
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
console.log('\n')
         console.log(`Username: ${this.username}`);
console.log('\n')
        //console.log(this);
    }

}

console.log(user.username)
console.log('\n')
console.log(user.getUserDetails());

//-----------------------------------------------------------------------------------

//construtor function new keword is construvtior

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

   
    return this
}

// new nahi use kare ga to values override ho jaye gi 
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log('\n')

console.log(userTwo);

