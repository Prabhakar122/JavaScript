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
    // console.log("The array is empty");
}


const anyObject = {}

if (Object.keys(anyObject).length == 0) {
    // console.log("The object is empty");
}


// Nullish Coalescing Operator (??) : null , undefined

let value1;
// value1 = 5 ?? 10
// value1 = null ?? 10
// value1 = 10 ?? null
// value1 = undefined ?? 10

// console.log(value1);


// terniary operator
// condition ? true : false

const value2 = 100

value2 <=80 ? console.log("less than 80"): console.log("more than 80");