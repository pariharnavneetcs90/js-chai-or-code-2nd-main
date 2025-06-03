//https://www.youtube.com/watch?v=AViTh83k-IE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=18

// object deconstruct 

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