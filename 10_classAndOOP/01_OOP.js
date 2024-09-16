const user = {
    username : 'Prabhat Tharu',
    age : 21,
    loggedIn : true,

    userDetail : function () {
            // console.log('hello');
            console.log(this);
            console.log(this.username);
        }
}

// console.log(user);
// console.log(user.userDetail());
// console.log(this);

function users(username, isloggedIn) {
    this.username = username;
    this.isloggedIn = isloggedIn


    /*  must return explicitly if there is no use of new keyword */
    // return this;
}

// const userOne = users('Prabhat', true);
const userOne = new users('Prabhat', true);
const userTwo = new users('sulabh', false);

// console.log(userOne);
// console.log(userTwo);
