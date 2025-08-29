//https://www.youtube.com/watch?v=u6mVHkMpoMk&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=45
//45 

class User {
    constructor (username){
        this.username = username
    }

    logme(){
        console.log(`NAME ${this.username}` );
    }

    static createId (){ // staic accese nahi kare deta 
        return `123`
    }
}

const hitesh = new User('navneet')
console.log(hitesh.createId()) // static use kiya to ab error aye ga acces nahi hai 