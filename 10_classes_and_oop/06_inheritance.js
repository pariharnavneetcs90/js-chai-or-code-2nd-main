//https://www.youtube.com/watch?v=u6mVHkMpoMk&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=45
//45 
class a {
    constructor (username){
        this.username = username
    }

    logme(){
        console.log(`NAME is ${this.username}`);
    }
}

class Teacher extends  a{
    constructor(username,email,password){
        super(username) // super bhaidya hai atomaticaly dheke ga KI HUM a class ko extend kar reha hai usme username hai to usko call kar le ga
        this.email =email
        this.password = password
    }

    addCourse(){
        console.log(`A course was added ${this.username}`)
    }
}
// obejt bana raha hai
const chai = new Teacher ( 'chai','chai@mams','123')

chai.addCourse()// function calling

chai.logme()// inheritance 

console.log('\n')

const masalChai = new a ('masala')

masalChai.logme()
// chek instance

console.log(chai instanceof Teacher) // true
console.log(chai instanceof a) // true
