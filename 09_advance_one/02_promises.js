//https://www.youtube.com/watch?v=NJwRQgsu1Q8&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=40
//40

/* gpt 
Promise = a placeholder for a value you’ll get later (success or failure).


🌟 What is a Promise?

A Promise in JavaScript is like a guarantee of a future value.
It’s a container that says:

👉 “I don’t have the result yet, but I’ll give it to you later — either success ✅ or failure ❌.”
📦 Promise States

A Promise can be in 3 states:

    Pending ⏳ → Still waiting (like “order is being prepared”).

    Fulfilled ✅ → Success, got the result (like “food delivered”).

    Rejected ❌ → Something went wrong (like “order cancelled”).

🧪 Example 1: Making a Promise

const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("🎉 Task completed successfully!");
  } else {
    reject("❌ Something went wrong!");
  }
});

Here:

    resolve = call this if task succeeds.

    reject = call this if task fails.

🧪 Example 2: Using the Promise

myPromise
  .then(result => {
    console.log(result);  // 🎉 Task completed successfully!
  })
  .catch(error => {
    console.log(error);   // ❌ Something went wrong!
  })
  .finally(() => {
    console.log("Promise is done, success or fail.");
  });

    .then() → runs when promise is fulfilled.

    .catch() → runs when promise is rejected.

    .finally() → runs no matter what.

🧾 Real-Life Example

👉 Think of ordering food from Zomato:

    You place an order → Promise is Pending.

    Food arrives → Promise is Fulfilled (Resolved).

    Restaurant cancels order → Promise is Rejected.


*/
// 1st way
// making promise
// promise me resolve or reject hota hai
const one = new Promise(function(resolve,reject){
    // kya kya karta hai  promise
    // do async task
    //db calls,cryptography,network

    setTimeout(function(){
        console.log ('1sec baad - async task is complete');
        resolve() // ye resolve ko necche wale funtion se connect karne ke liye hai  (matlab 1sec baad - async task is complete ho gaya tab neeche wala task chale ga)
    },1000)
})

//promis ka ba use kar reha hai
one.then(function(){ // then ka connection hota hai resolve ke sath
    console.log(' promise consume');
})
console.log('\n')
// 2nd way 

// promis banya
 new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    , 1000})
 }).then(function(){ // promis use kiya
    console.log('async 2 resolve')  ;
 })

 //-----------------------------------------------------------------

 // promis me data jab aye ga 
//make promise
 const promisThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        //resolve me values aye gi abhi hum log khud values likh reha hai 
        resolve({user:'chai', email :"chai@djdj"})
    },1000)
 })
 //promis use
 promisThree.then(function(para1){
    console.log(para1);
 })
 //---------------------------------------------- // reject use (catch())

 const promisFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if (!error){ // !error- matlab error nahi hai to ye print 
            resolve ({username : 'hitesh' ,password :"123"}) //resolve
        } else{
             reject('mamla gadbad hai') // reject
        }
    },1000)
 })

 //promis use and chaning
 promisFour.then((para2) =>{
    console.log(para2);
    return para2.username
 }).then((para3) =>{
    console.log(para3);
 }).catch(function(para4){ // cath reject ke liye use hota hai error hai to 
    console.log(para4);
 }).finally(()=> console.log('the promis is either resolve or rejected'))
 //finally humesha execute ho ga 

 //----------------------------------------------------------------- async , await same as then and catch 
  const promisFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true 
        if (!error){ // !error- matlab error nahi hai to ye print 
            resolve ({username : 'hitesh' ,password :"123"}) //resolve
        } else{
             reject('wrong') // reject
        }
    },1000)
 })

 //promise use/consume
 // normalyy ye use karte the promisFive.then() ab async await kare ga

 async function kuchbhi() {
    try {
        const a = await promisFive
        console.log(a);
    } catch (error_hai) {
        console.log(error_hai);
    }
 }
kuchbhi()

//-------------------------------------------------------------------------fech

async function getAlluser() {
    try {
        const a =await  fetch('https://api.github.com/users/hiteshchoudhary')
        const b =await a.json()// jo fech se data araha hai usko bol reha hai jason banjao (jason me convert kar reha hai )
        // upar wale code me bhi awwait likha hai kyo ki jo data aye ga usko jason me conver karne ke liye time lage ga 
        console.log(b)
    } catch (error) {
        console.log(" fech ka error" , error)
    }
}
//getAlluser() 
//getAlluser() ---  ye call kare ga to kaam kare ga ( abhi comment is liye kiya hai niche then or catch wala format bhi dhekna hai to jada console me a jaye ga)

// -------------------------------------fech ko then, catch ke format me likh na ( fech ka print phele ata hai console me)
 /* comment kiya hai taki code clean rahe or fech ka print phele ata hai console me

     fetch('https://api.github.com/users/hiteshchoudhary')
    .then((para5) =>{
        return para5.json() // data ko jason me convert
    })
    .then ((data_para)=>{
        console.log(data_para);
    })
    .catch((error_para)=> console.log(error_para))

    */




