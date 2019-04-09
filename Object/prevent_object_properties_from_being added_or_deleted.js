const user = {
    name: 'Gordon',
    email: 'gordonwang0718@gmail.com',
}

Object.getOwnPropertyDescriptor(user);

Object.preventExtensions(user);
console.log(user);
user.password = '890718';
console.log(user);

console.log(Object.isExtensible(user));

Object.seal(user); // set configurable = false, no longer add or delete obj properties

Object.freeze(user); // set writable = false, no longer changed obj properties
