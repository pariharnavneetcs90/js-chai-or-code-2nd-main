//https://www.youtube.com/watch?v=AViTh83k-IE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=18

//----------------------------------------- object deconstruct(basically or easy way me object ko call karne ke liye easy method) -----------------------------------------

const course ={
    coursename: "js hindi",
    price:"500",
    courseInstructor:"hitesh"
}
console.log(course.courseInstructor)// basic and bad practice

const {courseInstructor} = course// better way
console.log(courseInstructor)

const {courseInstructor:instructor} = course// agarnaam bada ho to
console.log(instructor)

//++++++++++++++++++++++++++++++++++ api representation
// 1st way of api objects
{

}
//2nd way of api is araay in which there is multiple objects
[
    {},
    {},
    {}
]
//---------------------------------------------------------gpt se api ke barre me pata kiya----------------------------------
// 🧠 What is an API?

//     API stands for Application Programming Interface.
//     It’s like a menu in a restaurant — it tells you what you can order (request) and what you’ll get back (response).

// 🍔 Example:

// Imagine you're at a restaurant:

//     You (the user) look at the menu — that's the API.

//     You place your order with the waiter — that’s your request.

//     The waiter gives your order to the kitchen and brings back your food — that’s the response.

// You don’t need to know how the kitchen works — just use the menu!
// 🖥️ Real-World Example in Tech:

// You want to see the weather on your app:

//     Your app sends a request to a weather API.

//     The API sends back the weather data (e.g., temperature, city name).

//     Your app displays it.

// You didn’t need to collect weather data yourself — the API did it for you!