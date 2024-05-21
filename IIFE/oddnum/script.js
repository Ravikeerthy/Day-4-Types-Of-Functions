// Print odd numbers in an array

(function () {
    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    let oddNumber = arr1.filter(function (res1) {
      return res1 % 2 !== 0;
    });
    console.log("These are Odd Numbers:", oddNumber);
  })();