const getPuzzle = (fn) => {
    fn("this is a callback function");
}

getPuzzle((puzzle) => {
    console.log(puzzle);
});


// call back hell

const getDataCallback = (num, fn) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            fn(undefined, num * 2);
        } else {
            fn("Number is not provided");
        }
    }, 2000);
}

getDataCallback(2, (err, data) => {
    if (err) console.log(err);
    else {
        getDataCallback(data, (err, data) => {
            if (err) console.log(err);
            else console.log(data);
        })
    }
});
