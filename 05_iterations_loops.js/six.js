//https://www.youtube.com/watch?v=9MfwYoWKKVE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=30
//30
 // filter bohot imp hai databse se jo value ata hai usko manupulate karne ke liye
const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter
const newNum = myNums.filter ((eknum) => eknum > 4 )
console.log(newNum)

const newNum2 = myNums.filter ((eknum) =>{
 return eknum > 4 // agar curly brace lagya hai arrow function me to return likhna ho ga
} )

console.log("\n")
//--------------------------------------------------------------------------------
// for each // thoda jada complex hai iteration ke liye

const newNumms = [] // empty array kyo ki isme push kare ga myNums ki value

myNums.forEach((number) =>{
    if (number > 7) {
        newNumms.push(number) // new epmty array me push kar raha hai
    }
})

console.log(newNumms)
console.log("\n")

// same code humlogo ne filter se bhi kiya or for each se bhi
//--------------------------------------------------------------------------------

//++++++++++++++++++++++++++++++ extreamly imp
 
// isi thara data aye ga data base se
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//const prit = books.filter((bk)=>bk) // mera effort kaam karta hai kelin bk koi filte nahi laga raha sirf khe raha hai ki tuue so niche wala jada sahi hai methord 
console.log('\x1b[35m  full print   \x1b[0m')

const prit = books.filter(()=>true) // full print 
console.log(prit)

console.log("\n")
console.log('\x1b[35m  history    \x1b[0m')

const prit2 = books.filter((bk)=> bk.genre==="History") 
console.log(prit2) // correct

console.log("\n")
console.log('\x1b[35m  history and publish 1986    \x1b[0m')

const prit3 = books.filter((bk)=> bk.genre==="History" && bk.publish=== 1986) 
console.log(prit3)

console.log("\n")
console.log('\x1b[35m   publish >=2000    \x1b[0m')

const prit4 = books.filter((bk)=> bk.publish >= 2000) 
console.log(prit4)