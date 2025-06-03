//https://www.youtube.com/watch?v=4lb2pXWWXJI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=18

// we will declare object with constructore now

const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="mia "
console.log(tinderUser)

console.log('\n')
// below me nested objects hai
const reqularUser ={
    email:"pappubhosdi.google.com",
    fullname:{
        userFullname:{
            firstname:"nav",
            lastname:"par"
        }
    }
}
console.log(reqularUser.fullname.userFullname.firstname)

console.log('\n')
// object ki merging

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'c',4:'d'}

const obj3 ={obj1,obj2}// dont use this
console.log(obj3)// sari element nahi mile sirf nested ho gaya

const obj4 =Object.assign({},obj1,obj2)// this is good butnot perfect
console.log(obj4)

const obj5={...obj1,...obj2}// perfect and easy absolute cenima
console.log(obj5)

// take all key of an object in array
console.log('\n')
console.log(Object.keys(tinderUser)); // ye tinderuser ki sar keys de de ga or vo bhi array me to hum loop laga sakte hai
console.log(Object.values(tinderUser)); // ye sari vaues de de ga
console.log(tinderUser.hasOwnProperty('id')); // ye chek karta hai key hai ki nahi object me
console.log(tinderUser.hasOwnProperty('ids')); // false


