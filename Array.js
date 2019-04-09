
// Array
const array = [...Array(4).fill(0)];
console.log(array);

// Matrix
const matrix1 = [...Array(3)].map(r => Array(3).fill(0));
const matrix2 = [...Array(2*3).fill([...Array(3).fill(0)])];
console.log(matrix1);
console.log(matrix2);

const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b);
console.log(arr);
