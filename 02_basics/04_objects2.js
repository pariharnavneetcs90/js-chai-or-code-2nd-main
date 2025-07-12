//https://www.youtube.com/watch?v=4lb2pXWWXJI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=17
// 17/51

//----------------------------------------- we will declare object with constructore now-----------------------------------------

const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="mia "
console.log(tinderUser)

console.log('\n')
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------- below me nested objects hai-----------------------------------------
console.log('\x1b[35m          nested object       \x1b[0m')

const reqularUser ={
    email:"pappubhosdi.google.com",
    fullname:{
        userFullname:{
            firstname:"nav",
            lastname:"par"
        }
    }
}
console.log('\x1b[31m reqularUser \x1b[0m',reqularUser)
console.log('\x1b[31m reqularUser.fullname \x1b[0m',reqularUser.fullname)
console.log('\x1b[31m reqularUser.fullname.userFullname \x1b[0m',reqularUser.fullname.userFullname)
console.log('\x1b[31m reqularUser.fullname.userFullname.firstname \x1b[0m',reqularUser.fullname.userFullname.firstname)
//---------------------------------------------------------------------------------------------------------------------------
console.log('\n')

//----------------------------------------- object ki merging-----------------------------------------
console.log('\x1b[35m          object ki merging       \x1b[0m')

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'c',4:'d'}

const obj3 ={obj1,obj2}// dont use this
console.log(obj3)// sari element nahi mile sirf nested ho gaya
console.log('\n')

const obj4 =Object.assign({},obj1,obj2)// this is good butnot perfect
console.log(obj4)
console.log('\n')

const obj5={...obj1,...obj2}// perfect and easy absolute cenima
console.log(obj5)
//---------------------------------------------------------------------------------------------------------------------------
// take all key of an object in array
console.log('\n')
console.log(Object.keys(tinderUser)); // ye tinderuser ki sar keys de de ga or vo bhi array me to hum loop laga sakte hai
console.log(Object.values(tinderUser)); // ye sari vaues de de ga
console.log(tinderUser.hasOwnProperty('id')); // ye chek karta hai key hai ki nahi object me
console.log(tinderUser.hasOwnProperty('ids')); // false


