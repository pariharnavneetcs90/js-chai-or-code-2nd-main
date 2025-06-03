//https://www.youtube.com/watch?v=cHHU0jXfjKY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=21
let d = 500
if (true) {
    let a = 10
    let d = 5000
    const b = 20
    var c = 30// dont use var
    console.log('local ',d)
    
}
console.log('global ',d)
//console.log(a);// this will not be print because it is out of scope
//console.log(b);// this will not be print because it is out of scope
console.log(c);// this will be print so thats we dont use it