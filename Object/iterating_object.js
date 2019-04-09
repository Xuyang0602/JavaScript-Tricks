const username = {
    first: 'Gordon',
    last: 'Wang',
};

// Solution - 1
const forInLoop = () => {
    for (let u in username) {
        console.log(u);
    }
}
forInLoop();

// Solution - 2
const forOfLoop = () => {
    for (let u of Object.keys(username)) {
        console.log(u);
    }
}
forOfLoop();

// Solution - 3, ES7
console.log(Object.entries(username));
Object.entries(username).forEach(([key, value]) => {
    console.log(key, value);
});