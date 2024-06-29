
const user = {
    username: "Prabhat",
    price: 199,
    welcomeMsg: function () {
        console.log(`${this.username}, Welcome to our website.`);
        /* able to access username using this operator */

        // console.log(this);   //this refers to the object
    }
}
// user.welcomeMsg();
user.username = "Hari"
// user.welcomeMsg();

// console.log(this);
/* this refers to empty object in node js, but in browser this refers to windows */

function anything() {
    const username = "Prabhat"
    console.log(this);
    // console.log(this.username);     //unable to access the username using this operator
}
// anything()

/**********Arrow Function********** */
const lalala = () => {
    const username = "Falana Falana"
    console.log(this.username);
}
// lalala()

/********explicit return********* */
// const addition = (num1, num2) => {
//     return num1 + num2
// }

/********inplicit return********* */
// const addition = (num1, num2) =>  num1 + num2
// const addition = (num1, num2) =>  (num1 + num2)
const addition = (num1, num2) =>  ({
    username: "Prabhat",
    age : 20
})
console.log(addition(3, 6))