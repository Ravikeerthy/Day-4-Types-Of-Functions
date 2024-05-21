// Return all the prime numbers in an array

let num = [1, 3, 2, 5, 10, 4, 7];

let primeNum = num.filter(function(num1) {
    for(let i = 2; i<num1; i++){
        if (num1 % i === 0) {
            return false;
        }
        return num1!==1;
    }

});

console.log("The prime Numbers are: ", primeNum);