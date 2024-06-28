// const singletonObject = new Object()

const facebookUser = {}

facebookUser.name = "Prabhat"
facebookUser.age = 20
facebookUser.emali = "prabhat@facebook.com"

const details = {
    email : "prabhat@gmail.com",
    UserName : {
        fullName : {
            firstName : "Prabhat",
            lastName : "Tharu"
        }
    },
    Address : "Bardiya"
}

// console.log(details.UserName.fullName);

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "c", 4: "d"}
const obj3 = { 5: "e", 6: "f"}

// const obj4 = {obj1, obj2, obj3}     //not recommended
// const obj4 = Object.assign({}, obj1, obj2, obj3)    //{target, source}
const obj4 = { ...obj1, ...obj2, ...obj3}   //recommended

// console.log(obj4);


const JustAarray = [
    fb1 = {
        id : "123abc",
        email : "3434@gmail.com"
    },
    fb2 = {
        id : "456abc",
        email : "3434@gmail.com"
    },
    fb3 = {
        id : "789abc",
        email : "3434@gmail.com"
    }
]
// console.log(JustAarray[1].id);

// console.log(Object.keys(facebookUser));
// console.log(Object.keys(facebookUser)[1]);
// console.log(Object.values(facebookUser));
// console.log(Object.entries(facebookUser));  //not really used

console.log(facebookUser.hasOwnProperty("name"));     //to check object has property or not
