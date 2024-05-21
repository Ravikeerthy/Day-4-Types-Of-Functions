// Return all the prime numbers in an array

(function (prime) {
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    for (let i = 0; i < prime.length; i++) {
      if (isPrime(prime[i])) {
        console.log(prime[i]);
      }
    }
  })([1, 3, 2, 5, 10, 4, 7]);