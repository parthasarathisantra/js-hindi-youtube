// # primitive datatypes
//changeable

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3456543576654356754n //n means bigint




// Reference (Non primitive)

//Array, objects, Functions
//not changgeable

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name :"hitsh",
    age : 22,
   
}

const myFunction = function(){
    console.log("hello world");
    
}
myFunction()

console.log(typeof scoreValue);

//+++++++++++++++++++++++++++++++++++++++++++++++Memory++++++++++++++++++++++++++++++++++++

//stack(primitive)---> change, heap(non-primitive)---> not change

let myYoutubeName = "hiteshchaudharydotcom"
 let anotherName = "myYoutubeName"
 anotherName = "chaiaurcode"
 console.log(myYoutubeName);
 console.log(anotherName);
  let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
  }
 let userTwo = userOne

 userTwo.email = "hitesh@google.com"
 console.log(userOne.email);
 console.log(userTwo.email);
 

