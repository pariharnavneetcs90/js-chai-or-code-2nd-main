//https://www.youtube.com/watch?v=t7ZHPhgdA4U&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=20

// function with object and array

function calculateCartPrice(...nums){// ... is rest operator ye is liye use hua hai kyo ki hume nahi pata kitne arguments aye ga to parameter kitna ho ga to rest use kare ga
    return nums
}
console.log(calculateCartPrice(200,400,300))


//++++++++++++++++++++++++ objects in function
console.log('\n')
//object
const userss ={
    username:"ishika",
    price: "priceless"
}
const us ={
    username:"navneet",
    price: "worthless"
}
//function
function handelObject(randomObject){ //randomobject props ki thara use kiya hai 
    console.log(`name is ${randomObject.username} and price is ${randomObject.price}`)
}

handelObject(userss)
handelObject(us)

//++++++++++++++++++++++++ array in function
console.log('\n')
//array
const Arr =[0,5,9]
const Arr2 =[10,55,29]

//function
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(Arr))
console.log(returnSecondValue(Arr2))
console.log(returnSecondValue([400,200,1000]))
