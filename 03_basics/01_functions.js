

function sayMyName(){
console.log("H");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){
    let sum = number1 + number2
    return sum
    
}
const result = addTwoNumbers(2,3)
console.log("Result: ", result);


// addTwoNumbers(2,3)

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return
        
    // }
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// const instruction = loginUserMessage("hitesh")
// console.log(instruction);
// console.log(loginUserMessage());


function calculatecartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculatecartPrice(200, 400, 500, 2000))  

const user = {
    username : "hitesh",
    price: 199
} 
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondvalue(getArray){
    return getArray[1]
}

console.log(returnSecondvalue(myNewArray));
 console.log(returnSecondvalue([200, 400, 500, 1000]));




