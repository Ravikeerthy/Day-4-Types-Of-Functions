// Sum of all numbers in an array

let a = [1,2,3,4,5,6,7];

let b = 0;

let result1 = function (arr, arr1) {
    let sum = arr1;

    for(let i = 0; i<arr.length; i++){
        sum+=arr[i];
    }
    return sum;
}(a,b);


console.log("Sum of all numbers in an array is : ", result1);