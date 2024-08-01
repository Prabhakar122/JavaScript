const numbers = [ 1, 2, 3, 4, 5]

// const newNum = numbers.reduce( function (accumulator, current_value) {
//     console.log(`accumulator: ${accumulator} and current value : ${current_value}`);
//     return accumulator + current_value
// }, 0)
// console.log(newNum);

// const newNum = numbers.reduce( (accumulator, current_value) => {
//     console.log(`accumulator: ${accumulator} and current value : ${current_value}`);
//     return accumulator + current_value
// }, 1)
// console.log(newNum);

const ShopingCart = [
    {
        title : "JS",
        price : 999
    },
    {
        title : "Py",
        price : 1999
    },
    {
        title : "CPP",
        price : 2999
    },
    {
        title : "Rb",
        price : 3999
    }
]

const Total = ShopingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(`Total cost : ${Total}`);