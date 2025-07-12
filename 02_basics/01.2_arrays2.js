//https://www.youtube.com/watch?v=m6azhgyCi-k&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=15
//15
const arr1= ['a','b','c']
const arr2= [229001,'ehaha','f']

arr1.push(arr2)//o/p [ 'a', 'b', 'c', [ 'd', 'ehaha', 'f' ] ] ye 2nd array ko push to kar diya first me lekin merging nahi hui sahi se 
console.log(arr1)

console.log('\n')
console.log('nested array ko accese karna',arr1[3][0]);// isme 3rd index 2nd array hai or uske bhi andar 1st index print hua hai

//+++++++++++++++++++++++++++++++++++++++++++++ proper way to merge arrays 2 ways
console.log('\n');
const marvel_heros =['thor','itonman','black widow']
const dc_heros=["superman","batman","flash"]

//1st way
console.log('\n');
const all_heros = marvel_heros.concat(dc_heros); // this is proper way to merge to array elments
console.log(all_heros);

//2nd way
console.log('\n');
const new_heros=[...marvel_heros,...dc_heros]// this is beeter way to join
console.log("better way",new_heros);

//++++++++++++++++++++
console.log('\n');
const complexArray =[2,3,4,5,9,[7,9,6],5,[4,5,[2,5]]]// bhot nested hai isko ek hi array me likhna hai 

const simpleArray = complexArray.flat(Infinity)// infintiy kina andar tak nested solve kare yaha infinity likh diya hai to kitna bhi nested ho solve kar de ga

console.log('complex nested solve',simpleArray)


console.log('\n');
//++++++++++ chek if array or not

console.log(Array.isArray("navneet"))// it checks if it is array or not o/p false as navneet is string not array
console.log(Array.isArray([1,2,3]))// true because it is array
console.log('\n');
//++++++++++++++++++++++++++convert string to array

//    Splitting by a delimiter (e.g., comma):
    const str = "apple,banana,orange";
    const arr = str.split(",");
    console.log(arr); // Output: ["apple", "banana", "orange"]

    console.log('\n');

//Splitting into individual characters.
        const str2 = "hello";
        const arr3 = str2.split("");
        console.log(arr3); // Output: ["h", "e", "l", "l", "o"]

    console.log('\n');


//Splitting by whitespace.
    const str4 = "This is a sentence.";
    const arr4 = str4.split(" ");
    console.log(arr4); // Output: ["This", "is", "a", "sentence."]

    console.log('\n');


console.log(Array.from('Navneet'))// convert to array
console.log(Array.from(1568))// not working
//------------------------------------ diffrent  varable ko array ban deta hai  
const score1 =100;
const score2 =200;
const score3 =300;

console.log(Array.of(score1,score2,score3))// it also does merging 


