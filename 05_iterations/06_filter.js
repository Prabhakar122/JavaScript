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

const books = [
  { tilte : "Book One", genre : "Fiction", publish : "1990", edition : "2007"},
  { tilte : "Book Two", genre : "Non-Fiction", publish : "1992", edition : "2010"},
  { tilte : "Book Three", genre : "Science", publish : "1900", edition : "2011"},
  { tilte : "Book Four", genre : "Non-Science", publish : "2000", edition : "2014"},
  { tilte : "Book Five", genre : "History", publish : "2002", edition : "2015"},
  { tilte : "Book Six", genre : "Non-History", publish : "2007", edition : "2020"},
  { tilte : "Book Seven", genre : "Fiction", publish : "2005", edition : "2024"}
]
let userbooks = books.filter( (book) => {
  // return book.genre === 'Fiction'
})

// userbooks = books.filter( (book) => book.publish < 2000)
userbooks = books.filter( (book) => book.publish > 2000 && book.genre === 'History')

// console.log(userbooks);

