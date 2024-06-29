function name() {
    console.log("Hello world");
}
// name();


// function add(num1, num2) {
//     console.log(num1 + num2);
// }
function add(num1, num2) {
    let result = num1 + num2;
    // return result
    return num1 + num2
    console.log("prabhat");     //will never be executed
}
// add()
// add(3, 5)
// add(3, "5")

const result = add(3,5)
// console.log(result);


// function isLoggedIn(username = "Hari") {
//     return `${username} just logged in`
// }
function isLoggedIn(username) {
    // if (username === undefined) {
    //     console.log("Enter a username");
    //     return
    // }
    if (!username) {
        console.log("Enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(isLoggedIn("Prabhat"));
// console.log(isLoggedIn());

/*******Rest operator*********** */
function addition(...num1) {
    return num1
}
// console.log(addition(100,200,300,400));

const anObject = {
    username : "Prabhat",
    price : 199
}

function shopping(anyObject) {
    return `The username is ${anyObject.username} and price is ${anyObject.price}`
}
// console.log(shopping(anObject));
// console.log(shopping({
//     username : "Ram",
//     price : 299
// }));


const anArray = [ 100, 200, 300, 400]
function secondValue(anyArray) {
    return `The second value is ${anyArray[1]}`
}
// console.log(secondValue(anArray));
// console.log(secondValue([200, 400, 600, 800]));