/******If statement******* */


if (true) {
    // will be executed 
}
if (false) {
    // will not be executed
}

const IsLoggedIn = true
if (IsLoggedIn) {
    // console.log("User is logged in");
}

if (2==="2") {
    console.log("They are same");
}

// <, >, <=, >=, ==, !=, ===, !==

const temp = 45
if (temp == 44) {
    // console.log(`temperature is 44`);  
} else {
    // console.log(`temprature is not 44`);
}

// not recommended
// if (true) console.log("test1");
// if (true) console.log("test1"),
// console.log("test2");


const balance = 850

// if (balance < 500) {
//     console.log("balance is less than 500");
// } else if (balance <750) {
//     console.log("balance is less than 750");
// } else {
//     console.log("balance is less than 1000");
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromGmail = false

/* All conditions must be true. */
if (userLoggedIn && debitCard) {
    // console.log("Purchase can be made");
}

/* Any one condition must be true. */
if (loggedInFromGoogle || loggedInFromGmail) {
    // console.log("User is logged in");
}