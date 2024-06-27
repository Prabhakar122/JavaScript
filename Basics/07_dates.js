let CurrentDate = new Date();
let NewDate_01 = new Date("2002-11-25");
let NewDate_02 = new Date(2024, 0, 24);
let NewDate_03 = new Date(2024, 0, 24, 5, 6);

// console.log(CurrentDate);
// console.log(CurrentDate.getDate());
// console.log(CurrentDate.getDay());
// console.log(CurrentDate.getFullYear());
// console.log(CurrentDate.toString());
// console.log(CurrentDate.toDateString());
// console.log(CurrentDate.toLocaleString());

let timeStamp = Date.now();

// console.log(timeStamp);
// console.log(NewDate_01.getTime());

console.log(NewDate_01.toLocaleString('default', {
    weekday: "long",
}))
