const stringOne = "Prabhat "
const stringtwo = "Tharu"

console.log(stringOne + stringtwo); //not recomended
console.log(`First name is ${stringOne} and last name is ${stringtwo}`); //modern approach to provide string interpolation

// console.log(stringOne[0]);
// console.log(stringOne.length);

const stringThree = new String("my-name-is-prabhat");

// console.log(stringThree.slice(-2,4));
// const newstring = stringThree.substring(0,4)
// console.log(newstring);

console.log(stringThree.split('-'));