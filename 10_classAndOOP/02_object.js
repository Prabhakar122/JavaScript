function MultiplyBy5(num) {
    return num*5;
}

MultiplyBy5.power = 2

// console.log(MultiplyBy5(5));
// console.log(MultiplyBy5.power);
// console.log(MultiplyBy5.prototype);

function createUser(username, price) {
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function () {
    this.price++;
}

createUser.prototype.printMe = function () {
    console.log(`User = ${this.username}`);
    
}

const Apple = new createUser('Prabhat', 20);
const Banana = new createUser('Sulabh', 25);

Apple.increment();
console.log(Apple.price);


// Apple.printMe();
// Banana.printMe();
