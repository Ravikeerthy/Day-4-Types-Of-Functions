//Print odd numbers in an array


let arr = [1,2,3,4,5,6,7,8,9];

let even = arr.filter (function(res){
    return res % 2 === 0;
});

// console.log("Even Number are: ",  even);

let odd = arr.filter(function(num1){
    return num1 % 2 !==0;
});

console.log("Odd Number Are: ", odd);