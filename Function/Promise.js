const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve or reject only access one time;
        resolve("success");
        reject("this is my promise error1");
        reject("this is my promise error2");
    }, 2000);
});

// myPromise.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

myPromise.then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});


// promise chainning

const promiseChain = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number not provided');
    }, 2000);
});

promiseChain(4).then((data) => {
    return promiseChain(data);
}).then((data) => {
    return promiseChain(data);
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});