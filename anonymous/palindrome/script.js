// Return all palindromes in an array

let arr1 = ["xyz", "madam", "racecar","destiny","reviver"];
let arr2 = arr1.length;

let isPalindrome = function(a) {
    let b = a;

    a = a.split("").reverse().join("");

    return a == b;
}

let palindromeArray= function(arr1, arr2){
    let res = [];

    for(let i = 0; i<arr2; i++){
        if(isPalindrome(arr1[i])){
            res.push(arr1[i]);
        }
    }

    return res;
}

let x = palindromeArray(arr1, arr2)

if(x.length === 0){
    console.log("-1");
}
for (const str of x) {
    console.log(str, " ");
}