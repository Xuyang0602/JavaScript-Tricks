const defaultUser = {
    name: '',
    phoneNum: '',
    email: '',
    password: '...',
}


const user1 = {
    name: 'Gordon',
    sexl: 'M',
    email: 'GORDONWANG0718@gmail.com',
    password: '890718',
}

const res = Object.assign(defaultUser, user1);
console.log(res);


// ES8

const resES8 = {...defaultUser, ...user1};

console.log(resES8);