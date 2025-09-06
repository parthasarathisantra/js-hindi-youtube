// const tinderUser = new Object() // singleton

const tinderUser = {}              // non singleton
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "a", 6: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // keys = id,name,is loggedin
// console.log(Object.values(tinderUser)); // array of values of tinderuser
// console.log(Object.entries(tinderUser));// array of keys and values individually

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    courcename: "js in Hindi",
    price: "999",
    courceInstructur: "hitesh"
}
course.courceInstructur
// destructure the object
const {courceInstructur: instructor} = course
// console.log(courceInstructur);
console.log(instructor);
// {
//     "name": "hitesh"
//     "courcename": "js in hindi"
//     "price": "free"
// }

[
    {},
    {},
    {}
]










