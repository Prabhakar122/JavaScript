const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = numbers.map( (num) => num + 10)  /*map automatically returns value */
// console.log(newNumbers);

// map return all values but filter returns only true value

/*
chaining

array.map().map().filter()

*/

const newNum = numbers
.map( (num) => num + 10)
.map( (num) => num * 2)
.filter( (num) => num >=20)

console.log(newNum);