//https://www.youtube.com/watch?v=GAIbn16Iytc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=24
//Immediately Invoked Function Expression (iffe)
// function jo turat execute ho jaye (function jisme database connection ho )
//global scope ke pollution se dikkat hoti hai to iffe use karte hai

// ()()
(function chai (){
    console.log("dbconnct")
})();  // semi colen nahi lagay to error aye ga

(()=>{
    console.log('connct')
})();

((name)=>{
    console.log(`connct ${name}`)
})('navneet')