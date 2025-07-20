//https://www.youtube.com/watch?v=eWwge2YpHhc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=22
//22
// nested scope samjhe ga
// baccha papa se pesa le sakta hai lekin baap bacche se pesa nahi le sakte
// child parent ko acces kar pate hai lekin parent child ko nahi 
function one(){
    const username ="navneet parihar"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)// ye accese nahi ho ga kyo ki ye bhar hai or andar ki valu mang raha hai
    two()
}
one()

//+++++++++++++++++++++++++++++++++++++ scopes in nested if statement
console.log('\n')
if(true){
    const myName ="nav"
    if (myName==="nav"){ // ye argument true hai
        const size = "12inches"
        console.log(myName+size);//correct hai ye child hai to bhar ki value le sakta hai 
    }
    //console.log(size)// not workin andar hai size
}
//console.log(myName)//not wokin kyo ki andar hai myName
