// Sum of all numbers in an array

let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let b = 0;

let res = a1.reduce((a, ele) => a + ele, 0);

console.log("Sum of all number in array:", res);