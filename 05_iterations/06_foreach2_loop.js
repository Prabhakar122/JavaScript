const coding = [ "java", "ruby", "python", "C++"]

// const value = coding.forEach((item) => {
//     console.log(item);
//     return item
// });
//  console.log(value);
  /* For each loop does not return value */

  const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   const newNum = numbers.filter( (item) => item > 5)
const newNum = numbers.filter( (item) => {
    return item > 5
})
//   console.log(newNum);

const newNumber = []
numbers.forEach((item) => {
   if (item > 5) {
       newNumber.push(item)
   }
 });
//   console.log(newNumber);