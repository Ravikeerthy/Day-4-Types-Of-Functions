// Return all the prime numbers in an array

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isprime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

let res1 = num1.filter((num1) => isprime(num1));
console.log("The prime Number are: ", res1);