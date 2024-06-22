const numOne = new Number(100) //way to specify type of variable as number

// console.log(numOne.toFixed(2));
// console.log(numOne.toString().length);

// const numTwo = 123.567
// console.log(numTwo.toPrecision(4));

// const numThree = 10000000000
// console.log(numThree.toLocaleString('En-IN')); //seprates values with comas


/* *********Math********* */

// console.log(Math);
// console.log(Math.abs(-4)); 
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,5,2,6));
// console.log(Math.max(4,3,5,2,6));

// console.log(Math.random()); //generate random number between 0 to 1
// console.log((Math.random() * 10) + 1); //add 1 to make sure value is always greater than 0
// console.log(Math.floor(Math.random() * 10) + 1); //to avoid decimal value

/* Generate random numbers in given range */
const min = 1
const max = 6

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);