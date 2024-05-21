// Sum of all numbers in an array

(function (num) {
    let b=0;
  
    for(let i = 0; i<num.length; i++){
      b +=num[i];
    } 
    console.log(b);
    return b;
  
  })([1, 2, 3, 4, 5, 6, 7, 8, 9,10]);