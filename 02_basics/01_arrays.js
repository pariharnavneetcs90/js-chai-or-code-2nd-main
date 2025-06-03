//https://www.youtube.com/watch?v=cejBux2gtEE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=14
const myArr = [12, 14, 17, 22, 32, 45, 68, 72, "navneet"] // array declare
console.log(myArr[1]);

const myArr2 = new Array(5, 6, 8, 4, 7)// second way of declaring array
console.table(myArr2)

//++++++++++++++++++++++++++++++++array method

myArr.push(6) // .push is methord that push in last
myArr.push(7)
console.log(myArr)

myArr.pop()// remove freom last
console.log(myArr);

console.log('\n')
myArr.unshift(55)// inset at start
console.log(myArr);

myArr.shift()// remove from start // 55 hata diya
console.log(myArr);

console.log('\n')
console.log(myArr.includes("navneet"));//.includes is methord and tells that does array inclue that number or string
console.log(myArr.includes(32));
console.log(myArr.indexOf(32));// .indexOf is methord and it tells the position  

console.log('\n')
const newArr = myArr.join()//.join() methord convert to string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);
//+++++++++++++++++++++++++++++++++++++++++++++ slice or splice me main diffrenece ye hai ki slice- last index nahi include karta
// or splice last index bhi include karta hai or baki array ko bhi change kar deta hai    
console.log('\n')
console.log('concept of slice and splice')

const testArray = [0, 1, 2, 3, 4]
console.log('A :this is orignal test arrary', testArray)

const my1 = testArray.slice(1, 3) // third index not included
console.log("B: slice array", my1)
console.log("C: array after slice", testArray)

const my2 = testArray.splice(1, 3)//third index include ho ga
console.log('D: output of splice', my2)
console.log('E:orignal array after splice', testArray)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ summary

/*

SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.

*/













