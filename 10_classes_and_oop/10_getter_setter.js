//https://www.youtube.com/watch?v=t6vLhF-iSxQ&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=48
//48

//----------------------------------------------- another youtube vedio (https://www.youtube.com/watch?v=bl98dm7vJt0)

//------------------------------------------------------------- basic this is read only
console.log('\n')

const person ={
    firstName : 'nav',
    lastName : ' par',

    fullname(){
        return `${person.firstName}  ${person.lastName}`
    }
};

console.log(person.fullname())

//------------------------------------------------------ above code is read only to make changes we use getters and setters

//getter --> access property
//setters --> change (mutate) them
console.log('\n')

const person1 ={
    firstName : 'nav',
    lastName : ' par',
    //getter
    get fullname(){
        return `${person1.firstName}  ${person1.lastName}`
    },
    //setter
    set fullname(value){
        const parts = value.split(' ');
        this.firstName =parts[0];
        this.lastName = parts[1];

    }
};
//setter change value
person1.fullname = 'ishika srivastava '

console.log(person1)

console.log('\n')

//----------------------------------------------------------------------Hitesh


// samaj nahi aya ye
class User{
    constructor(email,password){
        this.email =email;
        this.password =password
    }
    //getter
    get password(){
        return `${this._password}hitesh`
    }
    //setter
    set password(value){
        this._password= value
    }

    //-------------------------------------
    //getter
    get email(){
        return this._email.toUpperCase()
    }
    //set
    set email(value){
        this._email = value
    }
}

const hitesh = new User("a@google.com",'ABCD')
console.log(hitesh.password)
console.log(hitesh.email)








