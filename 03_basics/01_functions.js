//https://www.youtube.com/watch?v=Bn56WahG_t0&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=19
//19
//function(10 ,20 line ka code jo kahi bhi use kar sakte hai

function sayMyName() {
    console.log("n")
    console.log("a")
    console.log("v")
}

//sayMyName// this is function refrence
sayMyName(); // this is function execute

function addTwoNumbers(num1,num2){ //num1 and num2 are parameters of function
    console.log(num1+num2);
}
addTwoNumbers(4,4)// 4 and 4 is arguments // this shoud work but not working
console.log(addTwoNumbers(4,4))

//++++++++++++++++++ better code below

console.log('\n')

function addTwoNumbers(num1,num2){ 
    let result = num1+num2
    return result // ye result retun kar raha hai
}
const result1123 = addTwoNumbers(3,4)
console.log("result",result1123)

//++++++++++++++++++++++++++ more better code
console.log('\n')

function addTwoNumbers(num1,num2){ 
  return num1+num2 //direct return
}

const result456 = addTwoNumbers(3,4)
console.log("result456",result456)
//++++++++++++++++++++++++++ advance
console.log('\n')

function logInAll(username ){ 
    if(!username){ 
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}
console.log(logInAll())// no nmae
console.log(logInAll('ayush'))
//---------------------------------------------------

console.log('\n')

function logIn(username ="default name"){ // agar koi argument nahi mile gi to default name likha rahe ga
    if(!username){ // !username matlab agar koi argument nahi mila to ye pass ho jaye ga lekin kyo ki humne upar default de diya hai to ye kabhi execute nahi ho ga
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}
console.log(logIn())// no nmae
console.log(logIn('ayush'))

