/* Decalaration */

const MyArray = [1, 3, 5, 6, true, "prabhat", true]
const Array_01 = new Array(1, 3, 4, 6)


/* Accessing elements */

// console.log(MyArray);
// console.log(MyArray[0]);


/* Operations */

// MyArray.push(47);
// MyArray.pop();

// MyArray.unshift("first"); //to insert element at first position
// MyArray.shift(); //to delete first element

// const Array_02 = MyArray.join();    //converts array into string
// console.log(Array_02);

// console.log(MyArray.includes(10));
// console.log(MyArray.indexOf(true));


/* slice and splice */

const newArray_01 = MyArray.slice(1,4)  //doesn't affect the original array
const newArray_02 = MyArray.splice(1,4) //affects the original array

console.log(newArray_02);
console.log(MyArray);