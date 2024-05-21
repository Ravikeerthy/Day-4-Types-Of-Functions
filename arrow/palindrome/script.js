// Return all the palindromes in an array

let x1 = ["xyz", "madam", "racecar", "destiny", "reviver"];
let x2 = x1.length;

function palindrome(str) {
  let reverse = str.split("").reverse().join("");
  return str === reverse;
}

let palindromeRes = x1.filter((x1) => palindrome(x1));

console.log("The palindromes are: ", palindromeRes);
