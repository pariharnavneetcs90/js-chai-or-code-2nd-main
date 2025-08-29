//https://www.youtube.com/watch?v=jss2rL9kv6s&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=47
//47

// know your object -- bhot depth me backchodi 

console.log(Math.PI) //3.14
Math.PI =5 // override nahi hua  
console.log(Math.PI) //3.14

console.log('\n')
//-------------------------------------
const a= Object.getOwnPropertyDescriptor(Math,'PI')

console.log(a)

console.log('\n')

// writable false hai to change nahi ho gi pi ki value 

//------------------------------------------------------------------
// hum log khud ka object bhi likh sakte hai jo change na ho 

 const chai ={
    name : 'ginger tea',
    price: 250
 }

 console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// change na ho 
 Object.defineProperty(chai , 'name' ,{
    writable : false ,
    enumerable: false
 })
 console.log(Object.getOwnPropertyDescriptor(chai, "name"));

 chai.name= 'raju'
 console.log(chai.name)// change nahi hua 
