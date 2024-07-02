/******Truthy and Falsy values****** */

const userEmail = "G@prabhat.com"

if (userEmail) {
    // console.log("The user has email");
}

/*
Falsy Values
false, "", 0, -0, BigInt 0n, undefined, null, NaN

Truthy Values
" ", {}, [], "0", "false", function(){} 
*/

const anyArray = []

if (anyArray.length === 0 ) {
    console.log("The array is empty");
}


const anyObject = {}

if (Object.keys(anyObject).length == 0) {
    console.log("The object is empty");
}