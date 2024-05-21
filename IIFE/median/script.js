// Return median of two sorted arrays of the same size.

let a1 = [1, 4, 7, 3, 6, 9];
let a2 = [2, 1, 6, 9, 5, 2, 7];

(function(a1, a2){
function median(a1, a2) {
  let mergedmedian = a1.concat(a2).sort(function (x, y) {
    return x - y;
  });

  let length = mergedmedian.length;
  let res = Math.floor(length / 2);

  if (length % 2 == 0) {
    return (mergedmedian[res - 1] + mergedmedian[res]) / 2;
  } else {
    return mergedmedian[res];
  }
}

let mainres = median(a1, a2);
console.log("The median of sorted arrays: ", mainres);
})(a1, a2);