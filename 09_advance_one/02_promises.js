

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {

        /*  Do async task  
        DB calls, cryptography, network
        */
        // console.log("Async task completed");
        resolve()
    }, 1000);
})

promiseOne.then(() => {
    // console.log("promise one resolved");
})


new Promise((resolve, reject) => {
    setTimeout(() => {
            // console.log("async task completed again");
            resolve();
    }, 1000);
}).then(() => {
    // console.log('promise one resolved again');
})


const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username: 'Prabhat Tharu',
            email : 'prabhat@gmail.com'
        })
    }, 1000);
})

promiseThree.then((user) => {
    // console.log(user);
})


const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let ERROR = false;
        if (!ERROR) {
            resolve( {
                user : 'prabhat',
                password : '1234'
            } )
        } else {
            reject('SomeThing Went Wrong!');
        }
    }, 1000);
})

// promise.then().then().............catch()
promiseFour.then( (userDetail) => {
    // console.log(userDetail);
    return userDetail.user;
}).then((userName) => {
    // console.log(userName);
}).catch((error) => {
    // console.log(error);
})
.finally( () => console.log('Finally Executes on both either resolve or reject')
)


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let ERROR = true;
        if (!ERROR) {
            resolve( {
                Language : 'JavaScript',
                user : '1234'
            } )
        } else {
            reject('JS Went Wrong!');
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);    
    }
}
consumePromiseFive()


async function getGithubData() {
    try {
        const response = await fetch('https://api.github.com/users/Prabhakar122');
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
// getGithubData()

fetch('https://api.github.com/users/Prabhakar122')
.then((response) => {
    let responseOne = response.json();
    return responseOne;
})
.then( (data) => {
    console.log(data);    
})
.catch( (error) => {
    console.log(error);    
})