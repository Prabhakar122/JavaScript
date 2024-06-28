// singleton object can only be created using constructors
// Object.create
// const newObject = new Object()


// object literals

const mySymbol = Symbol("key1");

const myObject = {
    name : "Prabhat",
    "full name": "Prabhat Tharu",
    [mySymbol] : "KeyValue",
    age : 19,
    home : "Bardiya",
    IsLoggedIn : true,
    IsLoggedInDays : ["Sunday", "Monday", "Friday"]
}

// console.log(myObject);
// console.log(myObject.name);
// console.log(myObject["full name"]);
// console.log(myObject[mySymbol]);

// myObject.name = "Prabhakar"
// console.log(myObject);

// Object.freeze(myObject)     //to lock the object
// myObject.name = "Bhaskar"
// console.log(myObject);


// function Greetings() {
//     console.log(`Hello, ${myObject.name}`);
// }

myObject.Greetings = function () {
    console.log(`Hello, ${this.name}`);
}
console.log(myObject.Greetings());