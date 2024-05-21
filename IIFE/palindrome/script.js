// Return all palindromes in an array

let arr1 = ["xyz", "madam", "racecar", "destiny", "reviver"];

(function (arr1) {
  let arr2 = arr1.length;

  function isPalindrome(a) {
    let b = a;

    a = a.split("").reverse().join("");

    return a == b;
  }

  function palindromeArray(arr1, arr2) {
    let res = [];

    for (let i = 0; i < arr2; i++) {
      if (isPalindrome(arr1[i])) {
        res.push(arr1[i]);
      }
    }

    return res;
  }

  let x = palindromeArray(arr1, arr2);

  if (x.length === 0) {
    console.log("-1");
  }
  for (const str of x) {
    console.log(str, " ");
  }
})(arr1);