var a = 40
let b = 50
const c = 60

if (true) {
    var a = 10
    let b = 20
    const c = 30
    // console.log("Inner a: ",a);
    // console.log("Inner b: ",b);
    // console.log("Inner c: ",c);
}
// console.log("Outer a: ",a);
// console.log("Outer b: ",b);
// console.log("Outer c: ",c);

/* var voilates the concept of scopes and creates problems so it is depricated */

/************Nested function*************** */
function functionOne() {
    const firstName = "Prabhat "
    function functionTwo() {
        const lastName = "Tharu"
        console.log(firstName + lastName);
    }
    // console.log(lastName);  //unable to access lastName
    functionTwo()
}
// functionOne()

/*************Nested if********** */

if (true) {
    const username = "Prabhat Tharu"
    if (username == "Prabhat Tharu") {
        // console.log(username);
    }
}

/*********Hoisting********* */

anyFunction()
function anyFunction() {
    console.log("Hello");
}

const anotherFunction = function () {
    console.log("DJ Rajesh");
}
anotherFunction()