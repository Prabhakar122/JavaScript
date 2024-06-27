const marvel_heros = [ "Ironman", "Thor", "Captain_America"]
const dc_heros = [ "Batman", "Superman", "Wonder_Women"]

// marvel_heros.push(dc_heros)
// const all_heros = marvel_heros.concat(dc_heros)
// const all_heros_01 = [...marvel_heros, ...dc_heros]     //more preferable

// console.log(all_heros_01);

const another_array = [1, 2, [3, 4], 5, [6, [7, 8]]]
const flated_array = another_array.flat(Infinity)

// console.log(flated_array);(

// console.log(Array.isArray("prabhat"))   //checks for array
// console.log(Array.from("prabhat"));     //converts to array
// console.log(Array.from({name: "prabhat"}));     //fails to converts to array

let marks_1 = 45
let marks_2 = 56
let marks_3 = 67

console.log(Array.of(marks_1, marks_2, marks_3));