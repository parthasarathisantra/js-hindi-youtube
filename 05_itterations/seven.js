const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums);
// const newNums = myNumbers.filter((map) => map+10)
// console.log(newNums);   -----> this is not possible
// myNumbers.forEach((val)=> {
//     console.log(val + 10);
    
// })

const newNums = myNumbers
                .map((num)=> num*10)
                .map((num)=> num + 1)
                .filter((num) => num>=40)
                console.log(newNums);
                

