//https://www.youtube.com/watch?v=uMI5cNeHTOc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=43
// prototype in js
/*
What is Prototype?

👉 In JavaScript, every object has a hidden property called [[Prototype]] (or __proto__).
👉 It’s basically a link to another object.
👉 That "other object" can provide methods & properties for reuse.

This is called Prototypal Inheritance — objects can "borrow" features from other objects.

In short:

Prototype = a hidden object that your object points to.

It gives your object extra powers (methods, properties).

If JS doesn’t find something in your object, it climbs up the prototype chain until it finds it (or not).

*/
// funtion, array , string -------> object--------->null
function multiplyby5 (num){
    return num*5
}

multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);
// samj nahi aya

//-----------------------------------------------------------

function createUser(username,score){
    
}
